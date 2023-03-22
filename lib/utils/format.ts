export const getUser = (id: string) => {
  return {
    id,
    email: `user${id}@test.com`
  }
}
