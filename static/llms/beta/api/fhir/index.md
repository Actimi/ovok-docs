---
title: FHIR API
sidebar_position: 1
sidebar_label: Overview
description: The Ovok FHIR API on the beta tier — every FHIR R5 resource at /fhir/R5/.
---

# FHIR API

The FHIR R5 data plane on the **beta** tier. Every FHIR R5 resource
type is mounted under `/fhir/R5/` with the standard set of REST interactions.

<ApiBase surface="fhir" inline={false} />

## What's documented here

158 FHIR R5 resource types, sourced from the official
`hl7.fhir.r5.core` package. Each carries its top-level elements, search
parameters and a link to the official FHIR spec.

## Resources by category

### Foundation

*Cross-resource infrastructure — versioning, conformance, terminology binding, capabilities.*

- [AuditEvent](/beta/api/fhir/foundation/audit-event) — A record of an event relevant for purposes such as operations, privacy, security, maintenance, and performance analysis.
- [Basic](/beta/api/fhir/foundation/basic) — Basic is used for handling concepts not yet defined in FHIR, narrative-only resources that don't map to an existing reso
- [Binary](/beta/api/fhir/foundation/binary) — A resource that represents the data of a single raw artifact as digital content accessible in its native format.  A Bina
- [Bundle](/beta/api/fhir/foundation/bundle) — A container for a collection of resources.
- [Composition](/beta/api/fhir/foundation/composition) — A set of healthcare-related information that is assembled together into a single logical package that provides a single 
- [Consent](/beta/api/fhir/foundation/consent) — A record of a healthcare consumer’s  choices  or choices made on their behalf by a third party, which permits or denies 
- [DocumentReference](/beta/api/fhir/foundation/document-reference) — A reference to a document of any kind for any purpose. While the term “document” implies a more narrow focus, for this r
- [Linkage](/beta/api/fhir/foundation/linkage) — Identifies two or more records (resource instances) that refer to the same real-world "occurrence".
- [List](/beta/api/fhir/foundation/list) — A List is a curated collection of resources, for things such as problem lists, allergy lists, facility list, organizatio
- [MessageHeader](/beta/api/fhir/foundation/message-header) — The header for a message exchange that is either requesting or responding to an action.  The reference(s) that are the s
- [OperationOutcome](/beta/api/fhir/foundation/operation-outcome) — A collection of error, warning, or information messages that result from a system action.
- [Parameters](/beta/api/fhir/foundation/parameters) — This resource is used to pass information into and back from an operation (whether invoked directly from REST or within 
- [Permission](/beta/api/fhir/foundation/permission) — Permission resource holds access rules for a given data and context.
- [Provenance](/beta/api/fhir/foundation/provenance) — Provenance of a resource is a record that describes entities and processes involved in producing and delivering or other
- [Subscription](/beta/api/fhir/foundation/subscription) — The subscription resource describes a particular client's request to be notified about a SubscriptionTopic.
- [SubscriptionStatus](/beta/api/fhir/foundation/subscription-status) — The SubscriptionStatus resource describes the state of a Subscription during notifications. It is not persisted.
- [SubscriptionTopic](/beta/api/fhir/foundation/subscription-topic) — Describes a stream of resource state changes identified by trigger criteria and annotated with labels useful to filter p

### Base

*People, places and organisations participating in care.*

- [Endpoint](/beta/api/fhir/base/endpoint) — The technical details of an endpoint that can be used for electronic services, such as for web services providing XDS.b,
- [Group](/beta/api/fhir/base/group) — Represents a defined collection of entities that may be discussed or acted upon collectively but which are not expected 
- [HealthcareService](/beta/api/fhir/base/healthcare-service) — The details of a healthcare service available at a location or in a catalog.  In the case where there is a hierarchy of 
- [Location](/beta/api/fhir/base/location) — Details and position information for a place where services are provided and resources and participants may be stored, f
- [Organization](/beta/api/fhir/base/organization) — A formally or informally recognized grouping of people or organizations formed for the purpose of achieving some form of
- [OrganizationAffiliation](/beta/api/fhir/base/organization-affiliation) — Defines an affiliation/assotiation/relationship between 2 distinct organizations, that is not a part-of relationship/sub
- [Patient](/beta/api/fhir/base/patient) — Demographics and other administrative information about an individual or animal receiving care or other health-related s
- [Person](/beta/api/fhir/base/person) — Demographics and administrative information about a person independent of a specific health-related context.
- [Practitioner](/beta/api/fhir/base/practitioner) — A person who is directly or indirectly involved in the provisioning of healthcare or related services.
- [PractitionerRole](/beta/api/fhir/base/practitioner-role) — A specific set of Roles/Locations/specialties/services that a practitioner may perform, or has performed at an organizat
- [RelatedPerson](/beta/api/fhir/base/related-person) — Information about a person that is involved in a patient's health or the care for a patient, but who is not the target o

### Clinical — Summary

*Patient-summary content. The longitudinal clinical picture.*

- [AllergyIntolerance](/beta/api/fhir/clinical-summary/allergy-intolerance) — Risk of harmful or undesirable, physiological response which is unique to an individual and associated with exposure to 
- [ClinicalImpression](/beta/api/fhir/clinical-summary/clinical-impression) — A record of a clinical assessment performed to determine what problem(s) may affect the patient and before planning the 
- [Condition](/beta/api/fhir/clinical-summary/condition) — A clinical condition, problem, diagnosis, or other event, situation, issue, or clinical concept that has risen to a leve
- [FamilyMemberHistory](/beta/api/fhir/clinical-summary/family-member-history) — Significant health conditions for a person related to the patient relevant in the context of care for the patient.
- [Goal](/beta/api/fhir/clinical-summary/goal) — Describes the intended objective(s) for a patient, group or organization care, for example, weight loss, restoring an ac
- [Procedure](/beta/api/fhir/clinical-summary/procedure) — An action that is or was performed on or for a patient, practitioner, device, organization, or location. For example, th
- [RiskAssessment](/beta/api/fhir/clinical-summary/risk-assessment) — An assessment of the likely outcome(s) for a patient or other subject as well as the likelihood of each outcome.

### Clinical — Diagnostics

*Observations, reports, imaging, genomics.*

- [BodyStructure](/beta/api/fhir/clinical-diagnostics/body-structure) — Record details about an anatomical structure.  This resource may be used when a coded concept does not provide the neces
- [DiagnosticReport](/beta/api/fhir/clinical-diagnostics/diagnostic-report) — The findings and interpretation of diagnostic tests performed on patients, groups of patients, products, substances, dev
- [GenomicStudy](/beta/api/fhir/clinical-diagnostics/genomic-study) — A set of analyses performed to analyze and generate genomic data.
- [ImagingSelection](/beta/api/fhir/clinical-diagnostics/imaging-selection) — A selection of DICOM SOP instances and/or frames within a single Study and Series. This might include additional specifi
- [ImagingStudy](/beta/api/fhir/clinical-diagnostics/imaging-study) — Representation of the content produced in a DICOM imaging study. A study comprises a set of series, each of which includ
- [MolecularSequence](/beta/api/fhir/clinical-diagnostics/molecular-sequence) — Representation of a molecular sequence.
- [Observation](/beta/api/fhir/clinical-diagnostics/observation) — Measurements and simple assertions made about a patient, device or other subject.
- [Questionnaire](/beta/api/fhir/clinical-diagnostics/questionnaire) — A structured set of questions intended to guide the collection of answers from end-users. Questionnaires provide detaile
- [QuestionnaireResponse](/beta/api/fhir/clinical-diagnostics/questionnaire-response) — A structured set of questions and their answers. The questions are ordered and grouped into coherent subsets, correspond
- [Specimen](/beta/api/fhir/clinical-diagnostics/specimen) — A sample to be used for analysis.

### Clinical — Medications

*Medications, immunizations, dispensing, ordering.*

- [FormularyItem](/beta/api/fhir/clinical-medications/formulary-item) — This resource describes a product or service that is available through a program and includes the conditions and constra
- [Immunization](/beta/api/fhir/clinical-medications/immunization) — Describes the event of a patient being administered a vaccine or a record of an immunization as reported by a patient, a
- [ImmunizationEvaluation](/beta/api/fhir/clinical-medications/immunization-evaluation) — Describes a comparison of an immunization event against published recommendations to determine if the administration is 
- [ImmunizationRecommendation](/beta/api/fhir/clinical-medications/immunization-recommendation) — A patient's point-in-time set of recommendations (i.e. forecasting) according to a published schedule with optional supp
- [Medication](/beta/api/fhir/clinical-medications/medication) — This resource is primarily used for the identification and definition of a medication, including ingredients, for the pu
- [MedicationAdministration](/beta/api/fhir/clinical-medications/medication-administration) — Describes the event of a patient consuming or otherwise being administered a medication.  This may be as simple as swall
- [MedicationDispense](/beta/api/fhir/clinical-medications/medication-dispense) — Indicates that a medication product is to be or has been dispensed for a named person/patient.  This includes a descript
- [MedicationKnowledge](/beta/api/fhir/clinical-medications/medication-knowledge) — Information about a medication that is used to support knowledge.
- [MedicationRequest](/beta/api/fhir/clinical-medications/medication-request) — An order or request for both supply of the medication and the instructions for administration of the medication to a pat
- [MedicationStatement](/beta/api/fhir/clinical-medications/medication-statement) — A record of a medication that is being consumed by a patient.   A MedicationStatement may indicate that the patient may 

### Clinical — Care Provision

*Care plans, encounters, requests, communications.*

- [CarePlan](/beta/api/fhir/clinical-care-provision/care-plan) — Describes the intention of how one or more practitioners intend to deliver care for a particular patient, group or commu
- [CareTeam](/beta/api/fhir/clinical-care-provision/care-team) — The Care Team includes all the people and organizations who plan to participate in the coordination and delivery of care
- [Communication](/beta/api/fhir/clinical-care-provision/communication) — A clinical or business level record of information being transmitted or shared; e.g. an alert that was sent to a respons
- [CommunicationRequest](/beta/api/fhir/clinical-care-provision/communication-request) — A request to convey information; e.g. the CDS system proposes that an alert be sent to a responsible provider, the CDS s
- [DeviceRequest](/beta/api/fhir/clinical-care-provision/device-request) — Represents a request a device to be provided to a specific patient. The device may be an implantable device to be subseq
- [Encounter](/beta/api/fhir/clinical-care-provision/encounter) — An interaction between healthcare provider(s), and/or patient(s) for the purpose of providing healthcare service(s) or a
- [EncounterHistory](/beta/api/fhir/clinical-care-provision/encounter-history) — A record of significant events/milestones key data throughout the history of an Encounter
- [EpisodeOfCare](/beta/api/fhir/clinical-care-provision/episode-of-care) — An association between a patient and an organization / healthcare provider(s) during which time encounters may occur. Th
- [Flag](/beta/api/fhir/clinical-care-provision/flag) — Prospective warnings of potential issues when providing care to the patient.
- [GuidanceResponse](/beta/api/fhir/clinical-care-provision/guidance-response) — A guidance response is the formal response to a guidance request, including any output parameters returned by the evalua
- [NutritionIntake](/beta/api/fhir/clinical-care-provision/nutrition-intake) — A record of food or fluid that is being consumed by a patient.  A NutritionIntake may indicate that the patient may be c
- [NutritionOrder](/beta/api/fhir/clinical-care-provision/nutrition-order) — A request to supply a diet, formula feeding (enteral) or oral nutritional supplement to a patient/resident.
- [RequestOrchestration](/beta/api/fhir/clinical-care-provision/request-orchestration) — A set of related requests that can be used to capture intended activities that have inter-dependencies such as "give thi
- [ServiceRequest](/beta/api/fhir/clinical-care-provision/service-request) — A record of a request for service such as diagnostic investigations, treatments, or operations to be performed.
- [SupplyDelivery](/beta/api/fhir/clinical-care-provision/supply-delivery) — Record of delivery of what is supplied.
- [SupplyRequest](/beta/api/fhir/clinical-care-provision/supply-request) — A record of a non-patient specific request for a medication, substance, device, certain types of biologically derived pr
- [VisionPrescription](/beta/api/fhir/clinical-care-provision/vision-prescription) — An authorization for the provision of glasses and/or contact lenses to a patient.

### Workflow

*Scheduling, tasks and verification.*

- [Appointment](/beta/api/fhir/workflow/appointment) — A booking of a healthcare event among patient(s), practitioner(s), related person(s) and/or device(s) for a specific dat
- [AppointmentResponse](/beta/api/fhir/workflow/appointment-response) — A reply to an appointment request for a patient and/or practitioner(s), such as a confirmation or rejection.
- [Schedule](/beta/api/fhir/workflow/schedule) — A container for slots of time that may be available for booking appointments.
- [Slot](/beta/api/fhir/workflow/slot) — A slot of time on a schedule that may be available for booking appointments.
- [Task](/beta/api/fhir/workflow/task) — A task to be performed.
- [Transport](/beta/api/fhir/workflow/transport) — Record of transport.
- [VerificationResult](/beta/api/fhir/workflow/verification-result) — Describes validation requirements, source(s), status and dates for one or more elements.

### Financial

*Coverage, claims, payments, billing.*

- [Account](/beta/api/fhir/financial/account) — A financial tool for tracking value accrued for a particular purpose.  In the healthcare field, used to track charges fo
- [ChargeItem](/beta/api/fhir/financial/charge-item) — The resource ChargeItem describes the provision of healthcare provider products for a certain patient, therefore referri
- [ChargeItemDefinition](/beta/api/fhir/financial/charge-item-definition) — The ChargeItemDefinition resource provides the properties that apply to the (billing) codes necessary to calculate costs
- [Claim](/beta/api/fhir/financial/claim) — A provider issued list of professional services and products which have been provided, or are to be provided, to a patie
- [ClaimResponse](/beta/api/fhir/financial/claim-response) — This resource provides the adjudication details from the processing of a Claim resource.
- [Contract](/beta/api/fhir/financial/contract) — Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement.
- [Coverage](/beta/api/fhir/financial/coverage) — Financial instrument which may be used to reimburse or pay for health care products and services. Includes both insuranc
- [CoverageEligibilityRequest](/beta/api/fhir/financial/coverage-eligibility-request) — The CoverageEligibilityRequest provides patient and insurance coverage information to an insurer for them to respond, in
- [CoverageEligibilityResponse](/beta/api/fhir/financial/coverage-eligibility-response) — This resource provides eligibility and plan details from the processing of an CoverageEligibilityRequest resource.
- [EnrollmentRequest](/beta/api/fhir/financial/enrollment-request) — This resource provides the insurance enrollment details to the insurer regarding a specified coverage.
- [EnrollmentResponse](/beta/api/fhir/financial/enrollment-response) — This resource provides enrollment and plan details from the processing of an EnrollmentRequest resource.
- [ExplanationOfBenefit](/beta/api/fhir/financial/explanation-of-benefit) — This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account b
- [InsurancePlan](/beta/api/fhir/financial/insurance-plan) — Details of a Health Insurance product/plan provided by an organization.
- [Invoice](/beta/api/fhir/financial/invoice) — Invoice containing collected ChargeItems from an Account with calculated individual and total price for Billing purpose.
- [PaymentNotice](/beta/api/fhir/financial/payment-notice) — This resource provides the status of the payment for goods and services rendered, and the request and response resource 
- [PaymentReconciliation](/beta/api/fhir/financial/payment-reconciliation) — This resource provides the details including amount of a payment and allocates the payment items being paid.

### Specialized — Public Health & Research

*Adverse events, biospecimens, research subjects, evidence.*

- [AdverseEvent](/beta/api/fhir/specialized-public-health-research/adverse-event) — An event (i.e. any change to current patient status) that may be related to unintended effects on a patient or research 
- [BiologicallyDerivedProduct](/beta/api/fhir/specialized-public-health-research/biologically-derived-product) — A biological material originating from a biological entity intended to be transplanted or infused into another (possibly
- [BiologicallyDerivedProductDispense](/beta/api/fhir/specialized-public-health-research/biologically-derived-product-dispense) — A record of dispensation of a biologically derived product.
- [DetectedIssue](/beta/api/fhir/specialized-public-health-research/detected-issue) — Indicates an actual or potential clinical issue with or between one or more active or proposed clinical actions for a pa
- [Evidence](/beta/api/fhir/specialized-public-health-research/evidence) — The Evidence Resource provides a machine-interpretable expression of an evidence concept including the evidence variable
- [EvidenceReport](/beta/api/fhir/specialized-public-health-research/evidence-report) — The EvidenceReport Resource is a specialized container for a collection of resources and codeable concepts, adapted to s
- [EvidenceVariable](/beta/api/fhir/specialized-public-health-research/evidence-variable) — The EvidenceVariable resource describes an element that knowledge (Evidence) is about.
- [NutritionProduct](/beta/api/fhir/specialized-public-health-research/nutrition-product) — A food or supplement that is consumed by patients.
- [ResearchStudy](/beta/api/fhir/specialized-public-health-research/research-study) — A scientific study of nature that sometimes includes processes involved in health and disease. For example, clinical tri
- [ResearchSubject](/beta/api/fhir/specialized-public-health-research/research-subject) — A ResearchSubject is a participant or object which is the recipient of investigative activities in a research study.
- [Substance](/beta/api/fhir/specialized-public-health-research/substance) — A homogeneous material with a definite composition.

### Specialized — Devices

*Device identity, definition, association and observation.*

- [Device](/beta/api/fhir/specialized-devices/device) — This resource describes the properties (regulated, has real time clock, etc.), adminstrative (manufacturer name, model n
- [DeviceAssociation](/beta/api/fhir/specialized-devices/device-association) — A record of association of a device.
- [DeviceDefinition](/beta/api/fhir/specialized-devices/device-definition) — This is a specialized resource that defines the characteristics and capabilities of a device.
- [DeviceDispense](/beta/api/fhir/specialized-devices/device-dispense) — Indicates that a device is to be or has been dispensed for a named person/patient.  This includes a description of the p
- [DeviceMetric](/beta/api/fhir/specialized-devices/device-metric) — Describes a measurement, calculation or setting capability of a device.  The DeviceMetric resource is derived from the I
- [DeviceUsage](/beta/api/fhir/specialized-devices/device-usage) — A record of a device being used by a patient where the record is the result of a report from the patient or a clinician.

### Specialized — Quality & Testing

*Measures, definitions, test scripts and reports.*

- [ActivityDefinition](/beta/api/fhir/specialized-quality-testing/activity-definition) — This resource allows for the definition of some activity to be performed, independent of a particular patient, practitio
- [EventDefinition](/beta/api/fhir/specialized-quality-testing/event-definition) — The EventDefinition resource provides a reusable description of when a particular event can occur.
- [Library](/beta/api/fhir/specialized-quality-testing/library) — The Library resource is a general-purpose container for knowledge asset definitions. It can be used to describe and expo
- [Measure](/beta/api/fhir/specialized-quality-testing/measure) — The Measure resource provides the definition of a quality measure.
- [MeasureReport](/beta/api/fhir/specialized-quality-testing/measure-report) — The MeasureReport resource contains the results of the calculation of a measure; and optionally a reference to the resou
- [ObservationDefinition](/beta/api/fhir/specialized-quality-testing/observation-definition) — Set of definitional characteristics for a kind of observation or measurement produced or consumed by an orderable health
- [PlanDefinition](/beta/api/fhir/specialized-quality-testing/plan-definition) — This resource allows for the definition of various types of plans as a sharable, consumable, and executable artifact. Th
- [SpecimenDefinition](/beta/api/fhir/specialized-quality-testing/specimen-definition) — A kind of specimen with associated set of requirements.
- [TestPlan](/beta/api/fhir/specialized-quality-testing/test-plan) — A plan for executing testing on an artifact or specifications
- [TestReport](/beta/api/fhir/specialized-quality-testing/test-report) — A summary of information based on the results of executing a TestScript.
- [TestScript](/beta/api/fhir/specialized-quality-testing/test-script) — A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specif

### Specialized — Medication Definition

*Regulatory & manufacturing models for medicinal products.*

- [AdministrableProductDefinition](/beta/api/fhir/specialized-medication-definition/administrable-product-definition) — A medicinal product in the final form which is suitable for administering to a patient (after any mixing of multiple com
- [ClinicalUseDefinition](/beta/api/fhir/specialized-medication-definition/clinical-use-definition) — A single issue - either an indication, contraindication, interaction or an undesirable effect for a medicinal product, m
- [Ingredient](/beta/api/fhir/specialized-medication-definition/ingredient) — An ingredient of a manufactured item or pharmaceutical product.
- [ManufacturedItemDefinition](/beta/api/fhir/specialized-medication-definition/manufactured-item-definition) — The definition and characteristics of a medicinal manufactured item, such as a tablet or capsule, as contained in a pack
- [MedicinalProductDefinition](/beta/api/fhir/specialized-medication-definition/medicinal-product-definition) — Detailed definition of a medicinal product, typically for uses other than direct patient care (e.g. regulatory use, drug
- [PackagedProductDefinition](/beta/api/fhir/specialized-medication-definition/packaged-product-definition) — A medically related item or items, in a container or package.
- [RegulatedAuthorization](/beta/api/fhir/specialized-medication-definition/regulated-authorization) — Regulatory approval, clearance or licencing related to a regulated product, treatment, facility or activity that is cite
- [SubstanceDefinition](/beta/api/fhir/specialized-medication-definition/substance-definition) — The detailed description of a substance, typically at a level beyond what is used for prescribing.
- [SubstanceNucleicAcid](/beta/api/fhir/specialized-medication-definition/substance-nucleic-acid) — Nucleic acids are defined by three distinct elements: the base, sugar and linkage. Individual substance/moiety IDs will 
- [SubstancePolymer](/beta/api/fhir/specialized-medication-definition/substance-polymer) — Properties of a substance specific to it being a polymer.
- [SubstanceProtein](/beta/api/fhir/specialized-medication-definition/substance-protein) — A SubstanceProtein is defined as a single unit of a linear amino acid sequence, or a combination of subunits that are ei
- [SubstanceReferenceInformation](/beta/api/fhir/specialized-medication-definition/substance-reference-information) — Todo.
- [SubstanceSourceMaterial](/beta/api/fhir/specialized-medication-definition/substance-source-material) — Source material shall capture information on the taxonomic and anatomical origins as well as the fraction of a material 

### Terminology

*Code systems, value sets, mappings, naming.*

- [CodeSystem](/beta/api/fhir/terminology/code-system) — The CodeSystem resource is used to declare the existence of and describe a code system or code system supplement and its
- [ConceptMap](/beta/api/fhir/terminology/concept-map) — A statement of relationships from one set of concepts to one or more other concepts - either concepts in code systems, o
- [NamingSystem](/beta/api/fhir/terminology/naming-system) — A curated namespace that issues unique symbols within that namespace for the identification of concepts, people, devices
- [TerminologyCapabilities](/beta/api/fhir/terminology/terminology-capabilities) — A TerminologyCapabilities resource documents a set of capabilities (behaviors) of a FHIR Terminology Server that may be 
- [ValueSet](/beta/api/fhir/terminology/value-set) — A ValueSet resource instance specifies a set of codes drawn from one or more code systems, intended for use in a particu

### Conformance

*Schemas, profiles, search params, capability statements.*

- [ActorDefinition](/beta/api/fhir/conformance/actor-definition) — The ActorDefinition resource is used to describe an actor - a human or an application that plays a role in data exchange
- [ArtifactAssessment](/beta/api/fhir/conformance/artifact-assessment) — This Resource provides one or more comments, classifiers or ratings about a Resource and supports attribution and rights
- [CapabilityStatement](/beta/api/fhir/conformance/capability-statement) — A Capability Statement documents a set of capabilities (behaviors) of a FHIR Server or Client for a particular version o
- [Citation](/beta/api/fhir/conformance/citation) — The Citation Resource enables reference to any knowledge artifact for purposes of identification and attribution. The Ci
- [CompartmentDefinition](/beta/api/fhir/conformance/compartment-definition) — A compartment definition that defines how resources are accessed on a server.
- [ConditionDefinition](/beta/api/fhir/conformance/condition-definition) — A definition of a condition and information relevant to managing it.
- [ExampleScenario](/beta/api/fhir/conformance/example-scenario) — A walkthrough of a workflow showing the interaction between systems and the instances shared, possibly including the evo
- [GraphDefinition](/beta/api/fhir/conformance/graph-definition) — A formal computable definition of a graph of resources - that is, a coherent set of resources that form a graph by follo
- [ImplementationGuide](/beta/api/fhir/conformance/implementation-guide) — A set of rules of how a particular interoperability or standards problem is solved - typically through the use of FHIR r
- [MessageDefinition](/beta/api/fhir/conformance/message-definition) — Defines the characteristics of a message that can be shared between systems, including the type of event that initiates 
- [OperationDefinition](/beta/api/fhir/conformance/operation-definition) — A formal computable definition of an operation (on the RESTful interface) or a named query (using the search interaction
- [Requirements](/beta/api/fhir/conformance/requirements) — The Requirements resource is used to describe an actor - a human or an application that plays a role in data exchange, a
- [SearchParameter](/beta/api/fhir/conformance/search-parameter) — A search parameter that defines a named search item that can be used to search/filter on a resource.
- [StructureDefinition](/beta/api/fhir/conformance/structure-definition) — A definition of a FHIR structure. This resource is used to describe the underlying resources, data types defined in FHIR
- [StructureMap](/beta/api/fhir/conformance/structure-map) — A Map of relationships between 2 structures that can be used to transform data.

### Other

*Resources outside the standard FHIR R5 module decomposition.*

- [InventoryItem](/beta/api/fhir/other/inventory-item) — functional description of an inventory item used in inventory and supply-related workflows.
- [InventoryReport](/beta/api/fhir/other/inventory-report) — A report of inventory or stock items.

