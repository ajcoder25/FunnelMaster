"use client";
import { UserButton, useUser } from "@clerk/nextjs";

export default function ProfilePage() {
  const { user } = useUser();

  if (!user) {
    return <div style={{ color: '#ededed', background: '#020203', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Loading...</div>;
  }

  return (
    <div style={{ background: '#020203', minHeight: '100vh', color: '#ededed', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <UserButton afterSignOutUrl="/" />
      <h1 style={{ marginTop: 24, fontSize: 32, fontWeight: 'bold' }}>Welcome, {user.firstName || user.username || user.emailAddresses[0]?.emailAddress}!</h1>
      <p style={{ marginTop: 8, fontSize: 18 }}>Email: {user.emailAddresses[0]?.emailAddress}</p>
      <p style={{ marginTop: 8, fontSize: 18 }}>User ID: {user.id}</p>
    </div>
  );
}
