'use strict';
module.exports = (sequelize, DataTypes) => {
  const freelancer = sequelize.define('freelancer', {
    img: DataTypes.STRING,
    title: DataTypes.STRING,
    firstname: DataTypes.STRING,
    lastname: DataTypes.STRING,
    address: DataTypes.STRING,
    mobilite: DataTypes.STRING,
    km_max:DataTypes.STRING,
    tel:DataTypes.STRING,
    cp:DataTypes.STRING,
    pref_lieu_de_travail: DataTypes.STRING,
    disponibilite: DataTypes.INTEGER,
    tjm_min:DataTypes.INTEGER,
    tjm_max: DataTypes.INTEGER,
    password: DataTypes.STRING,
    email: DataTypes.STRING,
    excel: DataTypes.INTEGER,
    powerpoint: DataTypes.INTEGER,
    word: DataTypes.INTEGER,
    microsoft_365: DataTypes.INTEGER,
    crm_hubspot: DataTypes.INTEGER,
    crm_salesforce: DataTypes.INTEGER,
    crm_pipedrive: DataTypes.INTEGER,
    crm: DataTypes.INTEGER,
    suite_adobe: DataTypes.INTEGER,
    illustrator: DataTypes.INTEGER,
    in_design: DataTypes.INTEGER,
    photoshop: DataTypes.INTEGER,
    marketing_fb: DataTypes.INTEGER,
    google_adwards: DataTypes.INTEGER,
    insta: DataTypes.INTEGER,
    reseaux_sociaux: DataTypes.INTEGER,
    keynote: DataTypes.INTEGER,
    pages: DataTypes.INTEGER,
    gsuite_google: DataTypes.INTEGER,
    numbers: DataTypes.INTEGER,
    erp_sap: DataTypes.INTEGER,
    ciel_gestion: DataTypes.INTEGER,
    cegid: DataTypes.INTEGER,
    sage_gestion_commercial: DataTypes.INTEGER,
    sage_comptabilite: DataTypes.INTEGER,
    quadra: DataTypes.INTEGER,
    reso_pb: DataTypes.INTEGER,
    confiance: DataTypes.INTEGER,
    empathie: DataTypes.INTEGER,
    intelligence_emo: DataTypes.INTEGER,
    communication: DataTypes.INTEGER,
    gestion_temps: DataTypes.INTEGER,
    gestion_stress: DataTypes.INTEGER,
    creativite: DataTypes.INTEGER,
    esprit_entre: DataTypes.INTEGER,
    audace: DataTypes.INTEGER,
    vision_visu: DataTypes.INTEGER,
    motivation: DataTypes.INTEGER,
    presence: DataTypes.INTEGER,
    sens_collectif: DataTypes.INTEGER,
    curiosite: DataTypes.INTEGER,
    sens_effort: DataTypes.INTEGER,
    sport: DataTypes.STRING,
    passion: DataTypes.STRING,
    engagement_asso: DataTypes.STRING,
    autres_softskill: DataTypes.STRING,


    assistance_suivi_comptable: DataTypes.BOOLEAN,
    relation_accountant: DataTypes.BOOLEAN,
    customer_recovery: DataTypes.BOOLEAN,
    payroll_preparation: DataTypes.BOOLEAN,
    assembly_approval_file: DataTypes.BOOLEAN,
    referencing_training_organization:DataTypes.BOOLEAN,
    use_business_software:DataTypes.BOOLEAN,
    internal_procedure: DataTypes.BOOLEAN,
    database: DataTypes.BOOLEAN,
    gestion_achat: DataTypes.BOOLEAN,
    administrative_file_management: DataTypes.BOOLEAN,
    management_assistantship: DataTypes.BOOLEAN,
    secretariat_and_maintenance_agenda: DataTypes.BOOLEAN,
    filing_documents: DataTypes.BOOLEAN,
    commercial_strategy_and_sales_pitch: DataTypes.BOOLEAN,
    management_of_commercial_activity: DataTypes.BOOLEAN,
    prospecting_outbound_sales: DataTypes.BOOLEAN,
    response_to_pulic_and_private_tenders: DataTypes.BOOLEAN,
    sales_administration: DataTypes.BOOLEAN,
    stock_management: DataTypes.BOOLEAN,
    business_data_crm: DataTypes.BOOLEAN,
    order_data_entry: DataTypes.BOOLEAN,
    quote_management: DataTypes.BOOLEAN,
    billing: DataTypes.BOOLEAN,
    claims_management: DataTypes.BOOLEAN,
    marketing_strategy_and_operational_monitoring: DataTypes.BOOLEAN,
    marketing_study: DataTypes.BOOLEAN,
    implementation_of_inbound_marketing_strategy: DataTypes.BOOLEAN,
    outbound_marketing: DataTypes.BOOLEAN,
    communication_strategy: DataTypes.BOOLEAN,
    outsourced_project_manager: DataTypes.BOOLEAN,
    creation_and_graphics: DataTypes.BOOLEAN,
    ux_design: DataTypes.BOOLEAN,
    ui_design_computer_graphics: DataTypes.BOOLEAN,
    redaction_design: DataTypes.BOOLEAN,
    seo_optimization: DataTypes.BOOLEAN,
    website_creation: DataTypes.BOOLEAN,
    community_management: DataTypes.BOOLEAN,
    press_relation: DataTypes.BOOLEAN,
    event: DataTypes.BOOLEAN,
    partnership_distribution_network_and_business_contribution: DataTypes.BOOLEAN,
    translation_work: DataTypes.BOOLEAN,
    administrative_and_financial_management: DataTypes.BOOLEAN,
    financing_grant_application: DataTypes.BOOLEAN,
    management_control: DataTypes.BOOLEAN,
    dashboard_and_financial_management: DataTypes.BOOLEAN,
    business_pland_and_provisional_budget: DataTypes.BOOLEAN,
    transfer_aid_and_buyout_of_business: DataTypes.BOOLEAN,
    outsourced_information_system_management: DataTypes.BOOLEAN,
    schema_directeur_si: DataTypes.BOOLEAN,
    functional_architecture: DataTypes.BOOLEAN,
    infra_reseau: DataTypes.BOOLEAN,
    outsourced_hr_department: DataTypes.BOOLEAN,
    plannings_management: DataTypes.BOOLEAN,
    payroll_tracking: DataTypes.BOOLEAN,
    establishment_of_contracts_end_of_contracts: DataTypes.BOOLEAN,
    suivi_mutuelle_medecine_du_travail: DataTypes.BOOLEAN,
    conflict_management: DataTypes.BOOLEAN,
    assembly_and_monitoring_litigation_files: DataTypes.BOOLEAN,
    harmonization_of_contracts: DataTypes.BOOLEAN,
    RGPD_compliation: DataTypes.BOOLEAN,
    
















    francais: DataTypes.INTEGER,
    anglais: DataTypes.INTEGER,
    italien: DataTypes.INTEGER,
    chinois: DataTypes.INTEGER,
    russe: DataTypes.INTEGER,
    arabe: DataTypes.INTEGER,
    allemand: DataTypes.INTEGER,
    autres_langue: DataTypes.STRING
  }, {});

  //table de jointure
  freelancer.associate = function(models) {
    freelancer.belongsToMany(models.users, {
      through: 'tj_users_f'
    })
    freelancer.belongsToMany(models.missions,{
      through: 'tj_missions_f'
    })
  };
  return freelancer;
};