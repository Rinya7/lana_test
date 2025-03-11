 
export const validateName = (name: string) => {
    const regex = /^[a-zA-Z]{2,12}$/;
    return regex.test(name) ? true  : 'Name must be 2-12 characters long and contain only letters.';
  };