"use client";
import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
  return (
    <div style={{ minHeight: "100vh", background: "#020203", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <SignIn
        appearance={{
          elements: {
            card: { background: "#18181b", boxShadow: "0 4px 32px 0 rgba(44,44,84,0.15)" },
            rootBox: { background: "#020203" },
            headerTitle: { color: "#ededed" },
            headerSubtitle: { color: "#ededed" },
            socialButtonsBlockButton: { background: "#232323", color: "#ededed" },
            dividerText: { color: "#ededed" },
            footerActionText: { color: "#ededed" },
          },
          variables: {
            colorPrimary: "#ededed",
            colorBackground: "#020203",
            colorText: "#ededed",
            colorInputBackground: "#232323",
            colorInputText: "#ededed",
            colorInputBorder: "#28244a",
          },
        }}
        path="/sign-in"
        routing="path"
        signUpUrl={undefined}
        afterSignInUrl="/profile"
        redirectUrl="/profile"
        onlyThirdPartyProviders={['google']}
      />
    </div>
  );
}
