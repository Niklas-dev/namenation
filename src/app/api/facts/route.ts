import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const GPT_NAME_FACTS: Array<string> = [
    "The most popular name in the world is Muhammad.",
    "The shortest name is ‘I’.",
    "‘Y’ is the most used letter as a first letter in a name.",
    "The name Adolf was a common name in Germany before Hitler came to power.",
    "The name ‘Wendy’ was first used in J.M. Barrie’s play ‘Peter Pan’.",
    "In Russia, it is common to name a child after their father’s first name.",
    "‘Jacob’ and ‘Emily’ are the most popular baby names in the United States.",
    "The name ‘Apple’ was first used as a baby name after Gwyneth Paltrow and Chris Martin named their daughter ‘Apple’.",
    "‘Elizabeth’ is the most common name used in literature.",
    "In the UK, the most common name for boys is ‘Oliver’, and for girls is ‘Olivia’.",
    "The name ‘Mary’ appears in the Bible more than any other name.",
    "The longest name in the world has 736 letters.",
    "‘Axl’ and ‘Jagger’ are popular names inspired by rock musicians.",
    "In some countries, it is illegal to give a child a name that is not on an approved list.",
    "The name ‘Melissa’ means ‘honey bee’ in Greek.",
    "‘Sophia’ is the most popular name for girls in the world.",
    "In Japan, it is common to have a family name before a given name.",
    "The name ‘April’ was originally used as a name for boys.",
  ];

  let randomNum = Math.floor(Math.random() * GPT_NAME_FACTS.length + 1);

  let randomFact = GPT_NAME_FACTS[randomNum];
  const jsonResponse = {
    fact: randomFact,
  };

  return NextResponse.json(jsonResponse);
}
