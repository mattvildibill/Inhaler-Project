    /**
     * Replace PLACEHOLDER values with your preferred dataset.
     * Recommended fields:
     * - name, deviceType, class, propellant, dosesPerInhaler
     * - co2ePerInhalerKg (kg CO2e per inhaler), co2ePerDoseG (g CO2e per dose)
     * - impactBand: "low" | "medium" | "high" (used for badge color)
     * - alternatives: array of { name, why, estComparison }
     * - sources: array of short citations or URLs (optional)
     */
    const INHALERS = [
      {
        id: "albuterol_mdi_hfa_placeholder",
        name: "Albuterol (SABA) — MDI (HFA) [placeholder]",
        deviceType: "MDI",
        drugClass: "SABA",
        propellant: "HFA (placeholder)",
        dosesPerInhaler: 200,
        co2ePerInhalerKg: 0,
        co2ePerDoseG: 0,
        impactBand: "high",
        notes: "Placeholder entry. Replace CO\u2082e estimates and propellant details based on your selected source and local product list.",
        alternatives: [
          {
            name: "Albuterol — DPI (if available)",
            why: "No propellant; typically lower device-related emissions.",
            estComparison: "Often lower than MDI (fill with numbers)."
          },
          {
            name: "SMI option (where applicable)",
            why: "Propellant-free mist device; may reduce GHG vs MDI.",
            estComparison: "Often lower than MDI (fill with numbers)."
          }
        ],
        sources: ["Add your citation(s) here"]
      },
      {
        id: "ics_laba_dpi_placeholder",
        name: "ICS/LABA — DPI [placeholder]",
        deviceType: "DPI",
        drugClass: "ICS/LABA",
        propellant: "None",
        dosesPerInhaler: 60,
        co2ePerInhalerKg: 0,
        co2ePerDoseG: 0,
        impactBand: "low",
        notes: "Dry powder inhalers (DPIs) are typically propellant-free; lifecycle emissions depend on manufacturing and distribution.",
        alternatives: [
          {
            name: "Other DPI within class",
            why: "Switch within DPI category to align with formulary/cost while maintaining lower GHG.",
            estComparison: "Comparable (fill with numbers)."
          }
        ],
        sources: ["Add your citation(s) here"]
      },
      {
        id: "laba_lama_smi_placeholder",
        name: "LAMA/LABA — SMI [placeholder]",
        deviceType: "SMI",
        drugClass: "LAMA/LABA",
        propellant: "None",
        dosesPerInhaler: 60,
        co2ePerInhalerKg: 0,
        co2ePerDoseG: 0,
        impactBand: "low",
        notes: "Soft mist inhalers (SMIs) are propellant-free; ensure patient can use device properly and has coverage.",
        alternatives: [
          {
            name: "DPI LAMA/LABA option",
            why: "Propellant-free alternative; consider inspiratory flow needs.",
            estComparison: "Comparable or lower (fill with numbers)."
          }
        ],
        sources: ["Add your citation(s) here"]
      }
    ];

    const INHALER_MAP = new Map(INHALERS.map((item) => [item.id, item]));

    const dom = {
      select: document.querySelector("#inhalerSelect"),
      lowOnly: document.querySelector("#lowOnly"),
      detailsCard: document.querySelector("#detailsCard"),
      title: document.querySelector("#title"),
      subtitle: document.querySelector("#subtitle"),
      tags: document.querySelector("#tags"),
      co2ePerInhaler: document.querySelector("#co2ePerInhaler"),
      co2ePerDose: document.querySelector("#co2ePerDose"),
      notes: document.querySelector("#notes"),
      alternatives: document.querySelector("#alternatives"),
      altFootnote: document.querySelector("#altFootnote")
    };

    function bandToBadge(band) {
      if (band === "low") return { text: "Lower GHG", cls: "impact-good" };
      if (band === "medium") return { text: "Moderate GHG", cls: "impact-warn" };
      return { text: "Higher GHG", cls: "impact-bad" };
    }

    function formatValue(value, unit, decimals, zeroLabel) {
      if (value === null || value === undefined) return "—";
      if (Number.isFinite(value) && value > 0) return `${value.toFixed(decimals)} ${unit}`;
      if (Number.isFinite(value) && value === 0) return zeroLabel;
      return "—";
    }

    function formatKg(value) {
      return formatValue(value, "kg CO\u2082e", 2, "0.00 kg CO\u2082e (placeholder)");
    }

    function formatG(value) {
      return formatValue(value, "g CO\u2082e", 1, "0.0 g CO\u2082e (placeholder)");
    }

    function renderOptions() {
      const lowOnly = dom.lowOnly.checked;
      const current = dom.select.value;

      const options = INHALERS
        .filter((item) => !lowOnly || item.impactBand === "low")
        .map((item) => ({ id: item.id, label: item.name }));

      const fragment = document.createDocumentFragment();
      for (const opt of options) {
        const option = document.createElement("option");
        option.value = opt.id;
        option.textContent = opt.label;
        fragment.appendChild(option);
      }

      dom.select.replaceChildren(fragment);

      if (options.some((opt) => opt.id === current)) {
        dom.select.value = current;
      }
    }

    function renderDetails(id) {
      const inhaler = INHALER_MAP.get(id);
      if (!inhaler) {
        dom.detailsCard.hidden = true;
        return;
      }

      dom.detailsCard.hidden = false;

      const badge = bandToBadge(inhaler.impactBand);
      dom.title.textContent = inhaler.name;

      const badgeEl = document.createElement("span");
      badgeEl.className = `badge ${badge.cls}`;
      badgeEl.textContent = badge.text;
      dom.title.appendChild(badgeEl);

      dom.subtitle.textContent =
        `${inhaler.deviceType || ""} \u2022 ${inhaler.drugClass || ""}` +
        (inhaler.propellant ? ` \u2022 Propellant: ${inhaler.propellant}` : "") +
        (inhaler.dosesPerInhaler ? ` \u2022 Doses: ${inhaler.dosesPerInhaler}` : "");

      const tagsFragment = document.createDocumentFragment();
      const tagItems = [
        ["Device", inhaler.deviceType || "—"],
        ["Class", inhaler.drugClass || "—"],
        ["Propellant", inhaler.propellant || "—"]
      ];

      for (const [label, value] of tagItems) {
        const pill = document.createElement("div");
        pill.className = "pill";

        const strong = document.createElement("strong");
        strong.textContent = `${label}:`;

        pill.appendChild(strong);
        pill.appendChild(document.createTextNode(` ${value}`));
        tagsFragment.appendChild(pill);
      }

      dom.tags.replaceChildren(tagsFragment);

      dom.co2ePerInhaler.textContent = formatKg(inhaler.co2ePerInhalerKg);
      dom.co2ePerDose.textContent = formatG(inhaler.co2ePerDoseG);
      dom.notes.textContent = inhaler.notes || "—";

      const altFragment = document.createDocumentFragment();
      (inhaler.alternatives || []).forEach((alt) => {
        const li = document.createElement("li");
        const name = document.createElement("strong");
        name.textContent = alt.name || "Alternative";
        li.appendChild(name);

        if (alt.why) {
          li.appendChild(document.createTextNode(" — "));
          const why = document.createElement("span");
          why.className = "muted";
          why.textContent = alt.why;
          li.appendChild(why);
        }

        if (alt.estComparison) {
          const detail = document.createElement("div");
          detail.className = "small muted";
          detail.textContent = `GHG comparison: ${alt.estComparison}`;
          li.appendChild(detail);
        }

        altFragment.appendChild(li);
      });

      dom.alternatives.replaceChildren(altFragment);

      const srcText = inhaler.sources && inhaler.sources.length
        ? `Sources: ${inhaler.sources.join(" \u2022 ")}`
        : "Sources: (add citations in the dataset)";
      dom.altFootnote.textContent = srcText;
    }

    function updateView() {
      renderOptions();
      if (dom.select.options.length) {
        renderDetails(dom.select.value);
      } else {
        dom.detailsCard.hidden = true;
      }
    }

    function init() {
      updateView();
      dom.lowOnly.addEventListener("change", updateView);
      dom.select.addEventListener("change", (event) => {
        renderDetails(event.target.value);
      });
    }

    init();
  
