import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const bundleDrop = sdk.getBundleDropModule(
  "0x250A20Ce34DAC766fe2Eb143238e9d4eCA26e1d6",
);

(async () => {
  try {
    await bundleDrop.createBatch([
      {
        name: "Senor Rexxie",
        description: "This NFT will give you access to TGCDAO!",
        image: readFileSync("scripts/assets/rex.png"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})()