import { SerialPort }
  from "serialport";

export async function
listPorts() {

  const ports =
    await SerialPort.list();

  return ports.map(
    (port) => ({
      path: port.path,

      manufacturer:
        port.manufacturer,

      serialNumber:
        port.serialNumber,
    })
  );
}