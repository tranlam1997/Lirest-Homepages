// export default class User {
//   [x: string]: Ref<string>
//   constructor(firstName = '', lastName = '', dateOfBirth = '', email = '', address = '', phoneNumber = '', password = '') {
//     this.firstName = ref(firstName)
//     this.lastName = ref(lastName)
//     this.dateOfBirth = ref(dateOfBirth)
//     this.email = ref(email)
//     this.address = ref(address)
//     this.phoneNumber = ref(phoneNumber)
//     this.password = ref(password)
//   }
// }

export default class User {
  [x: string]: string
  constructor(firstName = '', lastName = '', dateOfBirth = '', email = '', address = '', phoneNumber = '', password = '') {
    this.firstName = firstName
    this.lastName = lastName
    this.dateOfBirth = dateOfBirth
    this.email = email
    this.address = address
    this.phoneNumber = phoneNumber
    this.password = password
  }
}
