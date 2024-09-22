import React from "react";
import { LinearGradient } from "expo-linear-gradient";

type Props = {
  children: React.ReactNode;
  containerStyles?: string;
};

export default function PrimaryGradient({ children, containerStyles }: Props) {
  return (
    <LinearGradient
      colors={["#1e3a8a", "#2563eb"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      className={` ${containerStyles}`}
    >
      {children}
    </LinearGradient>
  );
}
