import { SignIn } from "@clerk/clerk-react";
import { dark } from "@clerk/themes";

export default function Login() {
  return (
    <>
      <div className="grid place-items-center py-2">
        <SignIn
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
