    /**
     * Data source: PrescQIPP inhaler carbon footprint data table v2.38 (UK).
     * Values below use the indicative gCO2e per inhaler from the source and
     * compute gCO2e per dose by dividing by doses per inhaler.
     */
    const SOURCES_PRESCQIPP = [
      "PrescQIPP Inhaler carbon footprint data table v2.38 (UK)",
      "https://www.prescqipp.info/media/l1fjjonb/attachment-1-inhaler-carbon-footprint-data-table-v238.xlsx",
      "https://www.prescqipp.info/our-resources/bulletins/bulletin-375-inhaler-carbon-footprint/"
    ];

    const NOTE_SUFFIX = "Indicative carbon footprint per inhaler from PrescQIPP v2.38 (UK); per-dose value derived from gCO2e per inhaler and doses per inhaler.";

    const INHALERS = [
      {
        id: "ventolin_evohaler_100_micrograms",
        name: "Ventolin Evohaler 100 micrograms",
        deviceType: "pMDI",
        drugClass: "SABA",
        propellant: "HFA-134a",
        dosesPerInhaler: 200,
        co2ePerInhalerKg: 25.74,
        co2ePerDoseG: 128.7,
        impactBand: "high",
        notes: "Indication: Asthma and reversible airways obstruction. Active ingredient(s): salbutamol 100 micrograms/puff. " + NOTE_SUFFIX,
        alternatives: [
          {
            name: "Ventolin Accuhaler 200 micrograms (DPI)",
            why: "Same SABA class without propellant.",
            estComparison: "0.58 kg CO2e/inhaler vs 25.74 kg CO2e/inhaler (PrescQIPP v2.38)."
          },
          {
            name: "Easyhaler Salbutamol 100 micrograms (DPI)",
            why: "Propellant-free SABA DPI option.",
            estComparison: "0.53 kg CO2e/inhaler vs 25.74 kg CO2e/inhaler (PrescQIPP v2.38)."
          }
        ],
        sources: SOURCES_PRESCQIPP
      },
      {
        id: "ventolin_accuhaler_200_micrograms",
        name: "Ventolin Accuhaler 200 micrograms",
        deviceType: "DPI",
        drugClass: "SABA",
        propellant: "None",
        dosesPerInhaler: 60,
        co2ePerInhalerKg: 0.583,
        co2ePerDoseG: 9.72,
        impactBand: "low",
        notes: "Indication: Asthma and reversible airways obstruction. Active ingredient(s): salbutamol 200 micrograms/puff. " + NOTE_SUFFIX,
        alternatives: [
          {
            name: "Easyhaler Salbutamol 100 micrograms (DPI)",
            why: "Another low-GHG SABA DPI option.",
            estComparison: "0.53 kg CO2e/inhaler vs 0.58 kg CO2e/inhaler (PrescQIPP v2.38)."
          }
        ],
        sources: SOURCES_PRESCQIPP
      },
      {
        id: "easyhaler_salbutamol_100_micrograms",
        name: "Easyhaler Salbutamol 100 micrograms",
        deviceType: "DPI",
        drugClass: "SABA",
        propellant: "None",
        dosesPerInhaler: 200,
        co2ePerInhalerKg: 0.533,
        co2ePerDoseG: 2.66,
        impactBand: "low",
        notes: "Indication: Asthma and reversible airways obstruction. Active ingredient(s): salbutamol 100 micrograms/puff. " + NOTE_SUFFIX,
        alternatives: [],
        sources: SOURCES_PRESCQIPP
      },
      {
        id: "atrovent_20_micrograms",
        name: "Atrovent 20 micrograms",
        deviceType: "pMDI",
        drugClass: "SAMA",
        propellant: "HFA-134a",
        dosesPerInhaler: 200,
        co2ePerInhalerKg: 17.632,
        co2ePerDoseG: 88.16,
        impactBand: "high",
        notes: "Indication: Asthma and COPD. Active ingredient(s): ipratropium bromide 20 micrograms/puff. " + NOTE_SUFFIX,
        alternatives: [],
        sources: SOURCES_PRESCQIPP
      },
      {
        id: "serevent_evohaler_25_micrograms",
        name: "Serevent Evohaler 25 micrograms",
        deviceType: "pMDI",
        drugClass: "LABA",
        propellant: "HFA-134a",
        dosesPerInhaler: 120,
        co2ePerInhalerKg: 17.16,
        co2ePerDoseG: 143.0,
        impactBand: "high",
        notes: "Indication: Asthma and COPD. Active ingredient(s): salmeterol (as xinafoate) 25 micrograms/puff. " + NOTE_SUFFIX,
        alternatives: [
          {
            name: "Serevent Accuhaler 50 micrograms (DPI)",
            why: "Same LABA class without propellant.",
            estComparison: "0.73 kg CO2e/inhaler vs 17.16 kg CO2e/inhaler (PrescQIPP v2.38)."
          }
        ],
        sources: SOURCES_PRESCQIPP
      },
      {
        id: "serevent_accuhaler_50_micrograms",
        name: "Serevent Accuhaler 50 micrograms",
        deviceType: "DPI",
        drugClass: "LABA",
        propellant: "None",
        dosesPerInhaler: 60,
        co2ePerInhalerKg: 0.732,
        co2ePerDoseG: 12.2,
        impactBand: "low",
        notes: "Indication: Asthma and COPD. Active ingredient(s): salmeterol (as xinafoate) 50 micrograms/inhalation. " + NOTE_SUFFIX,
        alternatives: [],
        sources: SOURCES_PRESCQIPP
      },
      {
        id: "clenil_modulite_100_micrograms",
        name: "Clenil Modulite 100 micrograms",
        deviceType: "pMDI",
        drugClass: "ICS",
        propellant: "HFA-134a",
        dosesPerInhaler: 200,
        co2ePerInhalerKg: 17.346,
        co2ePerDoseG: 86.73,
        impactBand: "high",
        notes: "Indication: Asthma. Active ingredient(s): beclometasone dipropionate 100 micrograms/puff. " + NOTE_SUFFIX,
        alternatives: [
          {
            name: "Pulmicort Turbohaler 200 micrograms (DPI)",
            why: "Propellant-free ICS option in the same class.",
            estComparison: "1.40 kg CO2e/inhaler vs 17.35 kg CO2e/inhaler (PrescQIPP v2.38)."
          }
        ],
        sources: SOURCES_PRESCQIPP
      },
      {
        id: "pulmicort_turbohaler_200_micrograms",
        name: "Pulmicort Turbohaler 200 micrograms",
        deviceType: "DPI",
        drugClass: "ICS",
        propellant: "None",
        dosesPerInhaler: 100,
        co2ePerInhalerKg: 1.4,
        co2ePerDoseG: 14.0,
        impactBand: "low",
        notes: "Indication: Asthma. Active ingredient(s): budesonide 200 micrograms/inhalation. " + NOTE_SUFFIX,
        alternatives: [],
        sources: SOURCES_PRESCQIPP
      },
      {
        id: "seretide_evohaler_25_125_micrograms",
        name: "Seretide Evohaler 25/125 micrograms",
        deviceType: "pMDI",
        drugClass: "ICS/LABA",
        propellant: "HFA-134a",
        dosesPerInhaler: 120,
        co2ePerInhalerKg: 17.16,
        co2ePerDoseG: 143.0,
        impactBand: "high",
        notes: "Indication: Asthma. Active ingredient(s): fluticasone propionate 125 micrograms and salmeterol 25 micrograms/puff. " + NOTE_SUFFIX,
        alternatives: [
          {
            name: "Seretide Accuhaler 50/250 micrograms (DPI)",
            why: "Same class without propellant.",
            estComparison: "0.90 kg CO2e/inhaler vs 17.16 kg CO2e/inhaler (PrescQIPP v2.38)."
          },
          {
            name: "Fostair Nexthaler 100/6 micrograms (DPI)",
            why: "Another low-GHG ICS/LABA DPI option.",
            estComparison: "0.89 kg CO2e/inhaler vs 17.16 kg CO2e/inhaler (PrescQIPP v2.38)."
          }
        ],
        sources: SOURCES_PRESCQIPP
      },
      {
        id: "seretide_accuhaler_50_250_micrograms",
        name: "Seretide Accuhaler 50/250 micrograms",
        deviceType: "DPI",
        drugClass: "ICS/LABA",
        propellant: "None",
        dosesPerInhaler: 60,
        co2ePerInhalerKg: 0.898,
        co2ePerDoseG: 14.97,
        impactBand: "low",
        notes: "Indication: Asthma. Active ingredient(s): fluticasone propionate 250 micrograms and salmeterol 50 micrograms/puff. " + NOTE_SUFFIX,
        alternatives: [
          {
            name: "Fostair Nexthaler 100/6 micrograms (DPI)",
            why: "Comparable low-GHG ICS/LABA DPI option.",
            estComparison: "0.89 kg CO2e/inhaler vs 0.90 kg CO2e/inhaler (PrescQIPP v2.38)."
          }
        ],
        sources: SOURCES_PRESCQIPP
      },
      {
        id: "fostair_100_6_micrograms",
        name: "Fostair 100/6 micrograms",
        deviceType: "pMDI",
        drugClass: "ICS/LABA",
        propellant: "HFA-134a",
        dosesPerInhaler: 120,
        co2ePerInhalerKg: 11.65,
        co2ePerDoseG: 97.09,
        impactBand: "high",
        notes: "Indication: Asthma and COPD. Active ingredient(s): beclometasone dipropionate 100 micrograms and formoterol fumarate dihydrate 6 micrograms/puff. " + NOTE_SUFFIX,
        alternatives: [
          {
            name: "Fostair Nexthaler 100/6 micrograms (DPI)",
            why: "Same active ingredients without propellant.",
            estComparison: "0.89 kg CO2e/inhaler vs 11.65 kg CO2e/inhaler (PrescQIPP v2.38)."
          }
        ],
        sources: SOURCES_PRESCQIPP
      },
      {
        id: "fostair_nexthaler_100_6_micrograms",
        name: "Fostair Nexthaler 100/6 micrograms",
        deviceType: "DPI",
        drugClass: "ICS/LABA",
        propellant: "None",
        dosesPerInhaler: 120,
        co2ePerInhalerKg: 0.889,
        co2ePerDoseG: 7.41,
        impactBand: "low",
        notes: "Indication: Asthma and COPD. Active ingredient(s): beclometasone dipropionate 100 micrograms and formoterol fumarate dihydrate 6 micrograms/puff. " + NOTE_SUFFIX,
        alternatives: [],
        sources: SOURCES_PRESCQIPP
      },
      {
        id: "spiriva_respimat_2_5_micrograms_inhalation_solution_plus_respimat_device",
        name: "Spiriva Respimat 2.5 micrograms, inhalation solution plus Respimat device",
        deviceType: "SMI",
        drugClass: "LAMA",
        propellant: "None",
        dosesPerInhaler: 60,
        co2ePerInhalerKg: 0.775,
        co2ePerDoseG: 12.92,
        impactBand: "low",
        notes: "Indication: Asthma and COPD. Active ingredient(s): tiotropium 2.5 micrograms per puff. " + NOTE_SUFFIX,
        alternatives: [
          {
            name: "Spiriva 18 micrograms inhalation powder plus HandiHaler device (DPI)",
            why: "Lower-GHG LAMA option in the same product family.",
            estComparison: "0.28 kg CO2e/inhaler vs 0.78 kg CO2e/inhaler (PrescQIPP v2.38)."
          }
        ],
        sources: SOURCES_PRESCQIPP
      },
      {
        id: "spiriva_18_micrograms_inhalation_powder_plus_handihaler_device",
        name: "Spiriva 18 micrograms inhalation powder plus HandiHaler device",
        deviceType: "DPI",
        drugClass: "LAMA",
        propellant: "None",
        dosesPerInhaler: 30,
        co2ePerInhalerKg: 0.282,
        co2ePerDoseG: 9.4,
        impactBand: "low",
        notes: "Indication: COPD. Active ingredient(s): tiotropium bromide monohydrate 22.5 micrograms equivalent to 18 micrograms tiotropium. " + NOTE_SUFFIX,
        alternatives: [],
        sources: SOURCES_PRESCQIPP
      },
      {
        id: "anoro_ellipta_55_micrograms_22_micrograms_inhalation_powder_pre_dispensed",
        name: "Anoro Ellipta 55 micrograms/22 micrograms inhalation powder, pre-dispensed",
        deviceType: "DPI",
        drugClass: "LABA/LAMA",
        propellant: "None",
        dosesPerInhaler: 30,
        co2ePerInhalerKg: 0.747,
        co2ePerDoseG: 24.9,
        impactBand: "low",
        notes: "Indication: COPD. Active ingredient(s): umeclidinium 55 micrograms and vilanterol 22 micrograms. " + NOTE_SUFFIX,
        alternatives: [
          {
            name: "Duaklir Genuair 340 micrograms/12 micrograms inhalation powder (DPI)",
            why: "Another low-GHG LABA/LAMA DPI option.",
            estComparison: "0.55 kg CO2e/inhaler vs 0.75 kg CO2e/inhaler (PrescQIPP v2.38)."
          }
        ],
        sources: SOURCES_PRESCQIPP
      },
      {
        id: "duaklir_genuair_340_micrograms_12_micrograms_inhalation_powder",
        name: "Duaklir Genuair 340 micrograms/12 micrograms inhalation powder",
        deviceType: "DPI",
        drugClass: "LABA/LAMA",
        propellant: "None",
        dosesPerInhaler: 60,
        co2ePerInhalerKg: 0.55,
        co2ePerDoseG: 9.17,
        impactBand: "low",
        notes: "Indication: COPD. Active ingredient(s): aclidinium bromide 322 micrograms and formoterol fumarate 12 micrograms/puff. " + NOTE_SUFFIX,
        alternatives: [],
        sources: SOURCES_PRESCQIPP
      },
      {
        id: "bevespi_aerosphere",
        name: "Bevespi Aerosphere",
        deviceType: "pMDI",
        drugClass: "LABA/LAMA",
        propellant: "HFA-134a",
        dosesPerInhaler: 120,
        co2ePerInhalerKg: 15.158,
        co2ePerDoseG: 126.32,
        impactBand: "high",
        notes: "Indication: COPD. Active ingredient(s): formoterol fumarate dihydrate 5 micrograms / glycopyrronium 7.2 micrograms/puff. " + NOTE_SUFFIX,
        alternatives: [
          {
            name: "Anoro Ellipta 55 micrograms/22 micrograms (DPI)",
            why: "Low-GHG LABA/LAMA DPI option.",
            estComparison: "0.75 kg CO2e/inhaler vs 15.16 kg CO2e/inhaler (PrescQIPP v2.38)."
          },
          {
            name: "Duaklir Genuair 340 micrograms/12 micrograms (DPI)",
            why: "Another low-GHG LABA/LAMA DPI option.",
            estComparison: "0.55 kg CO2e/inhaler vs 15.16 kg CO2e/inhaler (PrescQIPP v2.38)."
          }
        ],
        sources: SOURCES_PRESCQIPP
      },
      {
        id: "trelegy_ellipta_92_micrograms_55_micrograms_22_micrograms_inhalation_powder_pre_dispensed",
        name: "Trelegy Ellipta 92 micrograms/55 micrograms/22 micrograms inhalation powder, pre-dispensed",
        deviceType: "DPI",
        drugClass: "ICS/LABA/LAMA",
        propellant: "None",
        dosesPerInhaler: 30,
        co2ePerInhalerKg: 0.765,
        co2ePerDoseG: 25.5,
        impactBand: "low",
        notes: "Indication: COPD. Active ingredient(s): fluticasone furoate 92 micrograms/ umeclidinium 55 micrograms/ vilanterol 22 micrograms/puff. " + NOTE_SUFFIX,
        alternatives: [],
        sources: SOURCES_PRESCQIPP
      },
      {
        id: "trimbow_87_micrograms_5_micrograms_9_micrograms_pressurised_inhalation_solution",
        name: "Trimbow 87 micrograms/ 5 micrograms/ 9 micrograms pressurised inhalation, solution",
        deviceType: "pMDI",
        drugClass: "ICS/LABA/LAMA",
        propellant: "HFA-134a",
        dosesPerInhaler: 120,
        co2ePerInhalerKg: 14.829,
        co2ePerDoseG: 123.58,
        impactBand: "high",
        notes: "Indication: Asthma and COPD. Active ingredient(s): beclometasone 87 micrograms/ formoterol 5 micrograms/ glycopyrronium 9 micrograms/puff. " + NOTE_SUFFIX,
        alternatives: [
          {
            name: "Trimbow NEXThaler (DPI) 88/5/9 micrograms",
            why: "Same class without propellant.",
            estComparison: "0.89 kg CO2e/inhaler vs 14.83 kg CO2e/inhaler (PrescQIPP v2.38)."
          },
          {
            name: "Trelegy Ellipta 92/55/22 micrograms (DPI)",
            why: "Low-GHG triple-therapy DPI option.",
            estComparison: "0.77 kg CO2e/inhaler vs 14.83 kg CO2e/inhaler (PrescQIPP v2.38)."
          }
        ],
        sources: SOURCES_PRESCQIPP
      },
      {
        id: "trimbow_nexthaler_dpi_88_micrograms_5_micrograms_9_micrograms_per_actuation_inhalation_powder",
        name: "Trimbow NEXThaler (DPI) 88 micrograms/ 5 micrograms/ 9 micrograms per actuation inhalation powder",
        deviceType: "DPI",
        drugClass: "ICS/LABA/LAMA",
        propellant: "None",
        dosesPerInhaler: 120,
        co2ePerInhalerKg: 0.889,
        co2ePerDoseG: 7.41,
        impactBand: "low",
        notes: "Indication: COPD. Active ingredient(s): beclometasone 88 micrograms/ formoterol 5 micrograms/ glycopyrronium 9 micrograms/puff. " + NOTE_SUFFIX,
        alternatives: [
          {
            name: "Trelegy Ellipta 92/55/22 micrograms (DPI)",
            why: "Comparable low-GHG triple-therapy DPI option.",
            estComparison: "0.77 kg CO2e/inhaler vs 0.89 kg CO2e/inhaler (PrescQIPP v2.38)."
          }
        ],
        sources: SOURCES_PRESCQIPP
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
  
