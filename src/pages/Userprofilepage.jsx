import { UserProfile } from "@clerk/clerk-react";
import { dark } from "@clerk/themes";
import { style } from "motion/react-client";
export default function Userprofile() {
  return (
    <>
      <div className="grid place-items-center py-2">
        <UserProfile
          appearance={{
            baseTheme: dark,
            variables: {
              colorPrimary: "#cada7f",
              colorText: "#cada7f",
              colorTextSecondary: "#EEE8FB",
              colorInputText: "#cada7f",
              colorNeutral: "#EEE8FB",
            },
          }}
        />
      </div>
    </>
  );
}
