"use client";
import service from "@/appwrite";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { toast } from "sonner";
export default function Home() {
  const [email, setEmail] = useState<string>("");
  const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
  const [loading, setLoading] = useState<boolean>(false);
  const handleSubmit = async () => {
    try {
      if (!emailRegex.test(email)) {
        toast.error("Invalid email address", {
          position: "top-center",
        });
        return;
      }

      console.log(email);
      setLoading(true);
      const emailSent = await service.createEmail({ email });
      if (emailSent) {
        toast.success("Thanks for joining!", {
          position: "top-center",
        });
        setEmail("");
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
      toast.error("An error occured", {
        position: "top-center",
      });
    }
  };

  const handleKeydown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };

  return (
    <main className=" bg-custom-radial">
      <div className=" xl:w-8/12 w-10/12  mx-auto flex xl:flex-row flex-col  min-h-screen">
        <div className="left xl:w-5/12 w-full    py-[60px]">
          <Image src={"/logo.png"} alt="pokedex" width={150} height={150} />
          <div className="  mt-[3vw]">
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className=" text-[58px] font-bold">A Better Pokedex app</h1>
            </motion.div>
            <motion.p
              className=" text-[18px]"
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              PokéSnap brings the world of Pokémon to life by identifying
              real-world objects as if they were Pokémon.
            </motion.p>
            <motion.ul
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className=" mt-4"
            >
              <li className=" text-[18px]">
                1. Capture and identify real-life objects.
              </li>
              <li className=" text-[18px]">
                2. Get detailed insights on species, type, and stats.
              </li>
              <li className=" text-[18px]">
                3. Experience the world around you as a living Pokedex.
              </li>
            </motion.ul>
            {/* INput Email */}
            <div className=" mt-6">
              <div className="">
                <input
                  onKeyDown={handleKeydown}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="text"
                  name="email"
                  placeholder="Email Address"
                  className=" rounded-md w-full p-2 py-3 outline-none text-black"
                />
              </div>
              <button
                disabled={loading || email === ""}
                onClick={handleSubmit}
                className={`mt-2 bg-black w-full p-2 py-3 rounded-md ${
                  loading ? "opacity-50" : ""
                } ${email === "" ? "cursor-not-allowed bg-[#151515d6]" : ""}`}
              >
                {loading ? "Joining..." : "Join the waitlist"}
              </button>
            </div>
          </div>
        </div>
        <div className="right xl:w-1/2 w-full items-center justify-center flex ">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <Image src={"/mockup.png"} alt="pokedex" width={350} height={350} />
          </motion.div>
        </div>
      </div>
    </main>
  );
}
