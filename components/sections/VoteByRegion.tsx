'use client';

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import Button from '../LinkButton';
import { SMS_VOTE } from '@/constants/vote';
import { useState } from 'react';

const items: { label: string; value: string }[] = Object.entries(
  SMS_VOTE.regions
).map(([region, info]) => ({
  label: info.label,
  value: region,
}));

const VoteByRegion = () => {
  const [selectedRegion, setSelectedRegion] = useState<string>(items[0].value);

  const handleSelect = (value: string) => setSelectedRegion(value);

  return (
    <div
      id="vote"
      className="flex flex-col items-center gap-2 md:invisible md:opacity-0 md:absolute md:left-1/2 md:-translate-x-1/2 md:top-1/2 md:-translate-y-1/2"
    >
      <Select onValueChange={handleSelect}>
        <SelectTrigger className="w-full max-w-54 bg-white border-accent border-[1.5px]">
          <SelectValue placeholder="Sélectionnez votre région" />
        </SelectTrigger>
        <SelectContent className="bg-white border-accent border">
          <SelectGroup>
            {items.map((item) => (
              <SelectItem
                className="focus:text-accent focus:font-bold focus:bg-white"
                key={item.value}
                value={item.value}
              >
                {item.label}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
      <p className="italic text-xs max-w-xs mb-3">
        <span className="not-italic text-sm text-accent">⚠</span> En cliquant
        sur le bouton ci-dessous, vous allez voter depuis la région{' '}
        <strong>
          {
            SMS_VOTE.regions[selectedRegion as keyof typeof SMS_VOTE.regions]
              .label
          }
          .
        </strong>
      </p>
      <Button
        href={`sms:${SMS_VOTE.regions[selectedRegion as keyof typeof SMS_VOTE.regions].number}?body=${encodeURIComponent(SMS_VOTE.keyword)}`}
      >
        Voter
      </Button>
    </div>
  );
};

export default VoteByRegion;
