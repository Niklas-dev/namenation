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
    "The name ‘Ginny’ is short for ‘Virginia’.",
    "‘Ash’ is a popular name for boys inspired by the ‘Pokemon’ character ‘Ash Ketchum’.",
    "In some cultures, it is traditional to name a child after a grandparent.",
    "The name ‘Nemo’ means ‘nobody’ in Latin.",
    "The most common last name in the world is ‘Li’.",
    "‘Linda’ was the most popular name for girls in the United States in the 1940s and 1950s.",
    "‘Ava’ is a palindrome, meaning it is spelled the same backwards and forwards.",
    "In some cultures, it is common to name a child after a place or city.",
    "The name ‘Violet’ was first used as a name in Shakespeare’s play ‘Twelfth Night’.",
    "‘Zoe’ means ‘life’ in Greek.",
    "In some cultures, it is common to give a child a name that reflects the time or season of their birth.",
    "The name ‘Luna’ is inspired by the Latin word for ‘moon’.",
    "In some cultures, it is common to name a child after a religious figure or saint.",
    "The name ‘Hazel’ means ‘the hazelnut tree’.",
    "‘Aria’ means ‘air’ in Italian.",
    "In some cultures, it is common to name a child after a famous person or celebrity.",
    "The name ‘Aurora’ means ‘dawn’ in Latin.",
    "‘Felix’ means ‘lucky’ in Latin.",
    "The name ‘Serena’ means ‘calm’ in Latin.",
    "In some cultures, it is common to name a child after a trait or quality.",
    "The name ‘Jasmine’ comes from the Persian word ‘yasmin’ which means ‘gift from God’.",
    "In many African cultures, children are named based on the day of the week they were born.",
    "In Iceland, surnames are not used in the traditional sense. Instead, the child's father's first name is used as a suffix (e.g. if the father's name is 'Jón', a son would be named 'Jónsson' and a daughter would be named 'Jónsdóttir').",
    "In China, it is common for parents to choose a name based on the elements of the Five Elements theory (metal, wood, water, fire, earth).",
    "The name 'Ella' has been steadily increasing in popularity in recent years, particularly in the United Kingdom.",
    "In the Sikh religion, many boys are given the middle name 'Singh' which means 'lion' and many girls are given the middle name 'Kaur' which means 'princess'.",
    "In many Native American cultures, names are chosen based on significant events or natural phenomena that occur around the time of the child's birth.",
    "The name 'Aaliyah' means 'exalted' in Arabic and has been increasing in popularity in recent years, particularly in the United States.",
    "In some cultures, it is common for a child's name to be changed if they experience a significant life event or if their name is thought to be bringing bad luck.",
    "The name 'Saoirse' (pronounced 'seer-sha') is a popular Irish name that means 'freedom'.",
    "In many Spanish-speaking countries, children are given both a first and a second last name, with the second last name typically being the mother's maiden name.",
  ];

  let randomNum = Math.floor(Math.random() * GPT_NAME_FACTS.length + 1);

  let randomFact = GPT_NAME_FACTS[randomNum];
  const jsonResponse = {
    fact: randomFact,
  };

  return new Response(JSON.stringify(jsonResponse), {
    headers: { "Content-Type": "application/json" },
  });
}
