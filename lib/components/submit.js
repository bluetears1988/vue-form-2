import submit from '../templates/submit.jsx'

export default {
  render: submit,
  props: {
    text: {
      type: String,
      required:false,
      default:'Submit'
    }
  },
  methods: {
    getForm: require('./methods/get-form')
  },
  computed: {
    disabled: function() {
      return this.getForm().sending || (this.getForm().options.sendOnlyDirtyFields && this.getForm().pristine);
    }
  }
}