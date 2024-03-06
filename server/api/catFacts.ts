export default defineEventHandler(async () => {
  const response = await fetch("https://meowfacts.herokuapp.com/");
  const data = await response.json();
  return data;
});
