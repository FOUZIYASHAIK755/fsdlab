  const user = {
    name: 'fouziya',
    age: 20,
    email: 'abc@example.com',
    address: '123 cvr street'
  };
  function createProfile({ name, email }) {
    return { name, email };
  }
  const profile = createProfile(user);
  console.log(profile);  