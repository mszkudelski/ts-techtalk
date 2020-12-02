import { logError } from "./never";
import { useHook } from "./any";
import {
  CourierDelivery,
  ParcelLockerDelivery,
  stringifyDeliveryAddress,
} from "./unions";

// === NEVER ===
try {
  throw new Error("Wrong data passed!");
} catch (error) {
  // logError(error);
}

// === ANY ===

useHook("parameter");
useHook("parameter", ["string", 123, {}]);
useHook("parameter", ["string"]);
useHook("parameter", [123, 321, 456]);

// === Discriminated Unions ===

const courier: CourierDelivery = {
  type: "courier",
  street: "Street",
  localNumber: 12,
  city: "City",
};

const parcelLocker: ParcelLockerDelivery = {
  type: "parcel-locker",
  parcelLockerId: "34AG",
  parcelLockerAddress: "Street 34",
  city: "City",
};

// console.log(stringifyDeliveryAddress(courier));
// console.log(stringifyDeliveryAddress(parcelLocker));
