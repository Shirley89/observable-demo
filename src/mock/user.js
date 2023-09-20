import Mock from "mockjs";

export function getUserData() {
  return {
    id: Mock.Random.id(),
    name: Mock.Random.cname(),
    email: Mock.Random.email(),
    age: Mock.Random.integer(19, 45),
    character: Mock.Random.character()
  };
}

export function getLogoutUserData() {
  return { id: "null", name: "-", email: "-" };
}
