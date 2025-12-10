import Card from "./Card";

const Section = () => {
  return (
    <div className="flex flex-col items-center w-full min-h-screen px-6 py-16 mt-20 bg-black">
      <h1 className="mb-10 text-4xl font-bold text-center text-white">
        We have worked with thousands of amazing people
      </h1>

      <div className="grid w-full grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        <Card
          image="/man.jpg"
          name="David West"
          handle="davidwest"
          comment="Consequatur ut aliquid, neque provident molestias ad laborum eos numquam."
        />

        <Card
          image="/man.jpg"
          name="Marcus Foster"
          handle="marcusfoster"
          comment="Iure, itaque consequuntur quasi commodi neque eos consectetur quod. Vitae explicabo odio."
        />

        <Card
          image="/man.jpg"
          name="Lindsey Walton"
          handle="lindseywalton"
          comment="Eaque fugit dolorem fugiat voluptate nostrum fugiat nulla debitis."
        />

        <Card
          image="/women.jpg"
          name="Tom Cook"
          handle="tomcook"
          comment="Ullam perspiciatis, facilis laborum iste assumenda autem accusantium."
        />

        <Card
          image="/women.jpg"
          name="Courtney Henry"
          handle="courtneyhenry"
          comment="Doloremque sit ducimus magnam quas laudantium neque aliquam."
        />

        <Card
          image="/women.jpg"
          name="Whitney Francis"
          handle="whitneyfrancis"
          comment="Voluptates non culpa eum fugit assumenda doloremque reprehenderit."
        />
        
        <Card
          image="/women.jpg"
          name="Whitney Francis"
          handle="whitneyfrancis"
          comment="Voluptates non culpa eum fugit assumenda doloremque reprehenderit."
        />
        
        <Card
          image="/women.jpg"
          name="Whitney Francis"
          handle="whitneyfrancis"
          comment="Voluptates non culpa eum fugit assumenda doloremque reprehenderit."
        />
        
        <Card
          image="/women.jpg"
          name="Whitney Francis"
          handle="whitneyfrancis"
          comment="Voluptates non culpa eum fugit assumenda doloremque reprehenderit."
        />
        
        <Card
          image="/women.jpg"
          name="Whitney Francis"
          handle="whitneyfrancis"
          comment="Voluptates non culpa eum fugit assumenda doloremque reprehenderit."
        />
        
        <Card
          image="/man.jpg"
          name="Lindsey Walton"
          handle="lindseywalton"
          comment="Eaque fugit dolorem fugiat voluptate nostrum fugiat nulla debitis."
        />

        <Card
          image="/man.jpg"
          name="Lindsey Walton"
          handle="lindseywalton"
          comment="Eaque fugit dolorem fugiat voluptate nostrum fugiat nulla debitis."
        />

      </div>
    </div>
  );
};

export default Section;