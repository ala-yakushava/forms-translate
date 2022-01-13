export const fixtures = [
  {
    model: 'Country',
    data: {
      name: 'United States',
      displayName: null,
      localName: null,
      dialingCode: 1,
      src: './assets/img/flag/united-states.jpg'
    }
  },
  {
    model: 'Country',
    data: {
      name: 'Czechia',
      displayName: 'Czech Republic',
      localName: 'Česká republika',
      dialingCode: 420,
      src: './assets/img/flag/czech-republic.jpg'
    }
  },
  {
    model: 'Language',
    data: {
      name: 'English',
      dialect: 'classic',
      isRtl: false,
      code: 38
    }
  },
  {
    model: 'Language',
    data: {
      name: 'English',
      dialect: 'classic',
      isRtl: false,
      code: 63
    }
  },
  {
    model: 'Language',
    data: {
      name: 'Czech',
      dialect: 'classic',
      isRtl: false,
      code: 64
    }
  },
  {
    model: 'Right',
    data: {
      value: 'Right of correction',
      label: 'right.rightOfCorrection',
      default: true
    }
  },
  {
    model: 'Right',
    data: {
      value: 'Right of deletion',
      label: 'right.rightOfDeletion',
      default: true
    }
  },
  {
    model: 'Right',
    data: {
      value: 'Other',
      label: 'right.other',
      default: true
    }
  },
  {
    model: 'Right',
    data: {
      value: 'Right of access',
      label: 'right.rightOfAccess',
      default: true
    }
  },
  {
    model: 'Group',
    data: {
      value: 'Health Care Professional',
      label: 'group.healthCareProfessional',
      default: true
    }
  },
  {
    model: 'Group',
    data: {
      value: 'Former Employee or Contractor',
      label: 'group.FormerEmployeeOrContractor',
      default: true
    }
  },
  {
    model: 'Group',
    data: {
      value: 'Current Employee or Contractor',
      label: 'group.CurrentEmployeeOrContractor',
      default: true
    }
  },
  {
    model: 'Group',
    data: {
      value: 'Job Candidates',
      label: 'group.JobCandidates',
      default: true
    }
  },
  {
    model: 'Field',
    data: {
      type: 'email',
      name: 'email',
      default: true,
      hidden: false,
      required: true,
      order: 0,
      label: 'field.email.label',
      placeholder: 'field.email.placeholder',
      hint: 'field.email.hint',
      error: 'field.email.error'
    }
  },
  {
    model: 'Field',
    data: {
      type: 'email',
      name: 'emailConfirmation',
      default: true,
      hidden: false,
      required: true,
      order: 1,
      label: 'field.emailConfirmation.label',
      placeholder: 'field.emailConfirmation.placeholder',
      hint: 'field.emailConfirmation.hint',
      error: 'field.emailConfirmation.error'
    }
  },
  {
    model: 'Dictionary',
    data: {
      key: 'field.email.label',
      content: 'Email'
    }
  },
  {
    model: 'Dictionary',
    data: {
      key: 'field.emailConfirmation.placeholder',
      content: 'username@example.com'
    }
  },
  {
    model: 'Dictionary',
    data: {
      key: 'field.emailConfirmation.hint',
      content: 'We need your email to communicate with you'
    }
  },
  {
    model: 'Dictionary',
    data: {
      key: 'field.emailConfirmation.error',
      content: 'Please enter valid email address'
    }
  }
];
