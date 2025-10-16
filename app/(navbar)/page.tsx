import Link from "next/link";
import { createClient } from "@/utils/supabase/server";

export default async function Home() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  return (
    <>
      {/* HERO */}
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: "url(/images/chinh.jpg)",
        }}
      >
        <div className="hero-overlay"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">
              Build your personal recipe bookshelf
            </h1>
            <p className="mb-5">
              Create an account to begin your archival cooking journey
            </p>
            {!user ? (
              <Link href="/signup" className="btn btn-primary">
                Get Started
              </Link>
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
}
