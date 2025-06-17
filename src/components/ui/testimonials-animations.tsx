"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Card } from "@/components/ui/card";
import { Icons } from "@/components/ui/icons";

interface Testimonial {
  image: string;
  name: string;
  username: string;
  text: string;
  social: string;
}

interface TestimonialsAnimationsProps {
  testimonials: Testimonial[];
  className?: string;
  title?: string;
  description?: string;
  maxDisplayed?: number;
}

export function TestimonialsAnimations({
  testimonials,
  className,
  title = "What Our Users Say",
  description = "Real feedback from developers and teams using our component library.",
  maxDisplayed = 6,
}: TestimonialsAnimationsProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div className={className}>
      <div className="flex flex-col items-center justify-center pt-5">
        <div className="flex flex-col gap-5 mb-8">
          <h2 className="text-center text-4xl font-medium">{title}</h2>
          <p className="text-center text-muted-foreground">{description}</p>
        </div>
      </div>
      <div ref={ref} className="relative">
        <div className={cn("flex justify-center items-center gap-5 flex-wrap")}
        >
          {testimonials.slice(0, maxDisplayed).map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: isInView ? 0.15 * index : 0,
                ease: [0.25, 0.8, 0.25, 1],
              }}
              style={{ width: "320px", minHeight: "260px" }}
            >
              <Card className="w-80 h-auto p-5 relative bg-card border-border">
                <div className="flex items-center">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={50}
                    height={50}
                    className="rounded-full"
                  />
                  <div className="flex flex-col pl-4">
                    <span className="font-semibold text-base">
                      {testimonial.name}
                    </span>
                    <span className="text-sm text-muted-foreground">
                      {testimonial.username}
                    </span>
                  </div>
                </div>
                <div className="mt-5 mb-5">
                  <p className="text-foreground font-medium whitespace-pre-line">
                    {testimonial.text}
                  </p>
                </div>
                <button
                  onClick={() => window.open(testimonial.social, "_blank")?.focus()}
                  className="absolute top-4 right-4 hover:opacity-80 transition-opacity"
                >
                  <Icons.twitter className="h-4 w-4" aria-hidden="true" />
                </button>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
