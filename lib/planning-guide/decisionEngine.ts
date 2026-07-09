export type PlanningInputs = {
  deathLocation: string;
  province: string;
  urgency: string;
  funeralCover: string;
  funeralType: string;
};

export function getPotentialRisks(inputs: PlanningInputs) {
  const { urgency, funeralCover, funeralType, deathLocation } = inputs;

  const risks: string[] = [];

  if (urgency === "Immediately") {
    risks.push("Decisions may be rushed. Try to get at least one written quote before paying a deposit.");
  }

  if (funeralCover === "No") {
    risks.push("The family may need to fund the funeral directly, so setting a budget early is important.");
  }

  if (funeralCover === "Not sure") {
    risks.push("There may be funeral cover available, but it should be confirmed before large payments are made.");
  }

  if (funeralType === "Not sure") {
    risks.push("Burial and cremation can have different costs, timelines and requirements. Ask providers to explain both options.");
  }

  if (deathLocation === "At home") {
    risks.push("When death occurs at home, documentation and confirmation steps can be more complicated than in hospital.");
  }

  return risks;
}

export function getImmediateActions(inputs: PlanningInputs) {
  const { deathLocation, urgency, funeralCover } = inputs;

  const actions: string[] = [
    "Notify close family members or a trusted person who can help you make calls.",
    "Keep the deceased's ID document and your own ID document available.",
  ];

  if (deathLocation === "At home") {
    actions.push(
      "Contact a medical practitioner, ambulance service, or relevant authority to confirm the death.",
      "Do not move the deceased before the correct person has confirmed what must happen next."
    );
  }

  if (deathLocation === "In hospital" || deathLocation === "In hospice") {
    actions.push(
      "Ask the hospital or hospice what documentation they will provide.",
      "Confirm when the deceased can be released to a funeral provider."
    );
  }

  if (deathLocation === "Accident") {
    actions.push(
      "Confirm whether the police or emergency services are involved.",
      "Ask which documentation or case information will be needed before funeral arrangements can continue."
    );
  }

  if (urgency === "Immediately") {
    actions.push(
      "Contact 2–3 funeral providers as soon as possible.",
      "Ask whether removal, storage, transport and documentation support are included."
    );
  }

  if (urgency === "Planning ahead") {
    actions.push(
      "Use this time to compare providers carefully before committing.",
      "Ask for itemised quotes so you can understand what is included and excluded."
    );
  }

  if (funeralCover === "Yes") {
    actions.push(
      "Contact the funeral insurer and ask what documents are required for the claim.",
      "Check whether the policy pays cash to the beneficiary or directly to a funeral provider."
    );
  }

  if (funeralCover === "Not sure") {
    actions.push(
      "Check bank statements, debit orders, employer benefits and family records for possible funeral cover.",
      "Ask close family whether any funeral policy exists before paying large deposits."
    );
  }

  if (funeralCover === "No") {
    actions.push(
      "Set a realistic budget before choosing services.",
      "Avoid committing to extras before understanding the full cost."
    );
  }

  return actions;
}

export function getFuneralTypeGuidance(inputs: PlanningInputs) {
  const { funeralType } = inputs;

  if (funeralType === "Burial") {
    return [
      "Ask whether the quote includes grave fees, transport, preparation and service costs.",
      "Confirm whether a tombstone is included or whether it will be arranged separately later.",
    ];
  }

  if (funeralType === "Cremation") {
    return [
      "Ask whether the provider assists with cremation permits and crematorium arrangements.",
      "Confirm what is included: collection, storage, service, cremation fees and ashes handling.",
    ];
  }

  return [
    "Ask providers to explain both burial and cremation options before deciding.",
    "Compare the emotional, cultural, religious and cost implications of each option.",
  ];
}

export function getSituationOverview(inputs: PlanningInputs) {
  const { deathLocation, province, urgency, funeralCover, funeralType } = inputs;

  let overview = `You indicated that the death occurred ${deathLocation.toLowerCase()} in ${province}.`;

  if (urgency === "Immediately") {
    overview += " Assistance appears to be needed immediately, so the priority is to confirm the required documentation and contact suitable funeral providers quickly.";
  }

  if (urgency === "Within a few days") {
    overview += " You have a short window to compare options, request written quotes and confirm what is included before committing.";
  }

  if (urgency === "Planning ahead") {
    overview += " Since you are planning ahead, you have time to compare providers, understand costs and avoid rushed decisions.";
  }

  if (funeralCover === "Yes") {
    overview += " Funeral cover is in place, so an important next step is to contact the insurer and confirm the claim requirements.";
  }

  if (funeralCover === "No") {
    overview += " Funeral cover is not in place, so budgeting and comparing costs will be especially important.";
  }

  if (funeralCover === "Not sure") {
    overview += " Funeral cover still needs to be confirmed before large payments are made.";
  }

  if (funeralType === "Burial") {
    overview += " You are considering a burial, so you should confirm whether grave, transport and service costs are included in quotes.";
  }

  if (funeralType === "Cremation") {
    overview += " You are considering cremation, so you should confirm cremation fees, permits and ashes handling with providers.";
  }

  if (funeralType === "Not sure") {
    overview += " Burial or cremation has not yet been decided, so comparing both options may help before choosing a provider.";
  }

  return overview;
}

export function getKeyConcerns(inputs: PlanningInputs) {
  const { urgency, funeralCover, funeralType, deathLocation } = inputs;

  const concerns: string[] = [];

  if (urgency === "Immediately") {
    concerns.push("Assistance may be needed urgently, so decisions could feel rushed.");
  }

  if (funeralCover === "Not sure") {
    concerns.push("Funeral cover has not yet been confirmed.");
  }

  if (funeralCover === "No") {
    concerns.push("Funeral costs may need to be funded directly by the family.");
  }

  if (funeralType === "Not sure") {
    concerns.push("Burial or cremation has not yet been decided.");
  }

  if (deathLocation === "At home") {
    concerns.push("A death at home may require additional confirmation and documentation steps.");
  }

  if (deathLocation === "Accident") {
    concerns.push("Accident-related cases may involve police or additional documentation.");
  }

  return concerns;
}

export function getRecommendedNextAction(inputs: PlanningInputs) {
  const {
    urgency,
    funeralCover,
    funeralType,
    deathLocation,
  } = inputs;

  // Highest priority situations first

  if (urgency === "Immediately" && funeralCover === "Not sure") {
    return "Confirm whether funeral cover exists before making significant payments or signing agreements.";
  }

  if (urgency === "Immediately" && funeralCover === "No") {
    return "Contact 2–3 funeral providers and request written quotations before committing to services.";
  }

  if (urgency === "Immediately" && funeralCover === "Yes") {
    return "Contact the funeral insurer immediately to confirm claim requirements and available benefits.";
  }

  if (deathLocation === "Accident") {
    return "Confirm which documentation will be required before funeral arrangements can proceed.";
  }

  if (funeralType === "Not sure") {
    return "Discuss burial and cremation options with family members before selecting a provider.";
  }

  return "Compare funeral providers in your area and request written quotations.";
}