import { SignUp } from "@clerk/clerk-react";
import { dark } from "@clerk/themes";
export default function Signup() {
  return (
    <>
      <div className="grid place-items-center py-2">
        <SignUp
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
