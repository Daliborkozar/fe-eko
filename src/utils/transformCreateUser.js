const transformObject = (input) => {
    const transformedObject = {
      user: input.username,
      displayName: input.displayName,
      roles: {
        [input.role]: input.role,
      },
      organization: input.organization,
      pwd: input.password,
      email: input.email,
    };
  
    return transformedObject;
  }

  export { transformObject }