export async function readVIN() {

  await new Promise(
    (resolve) =>
      setTimeout(
        resolve,
        1000
      )
  );

  return "WVWZZZAUZJP000001";
}