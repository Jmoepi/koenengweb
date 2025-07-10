import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Linkedin, Twitter } from 'lucide-react';
import Link from 'next/link';
import selebaloMoepiImage from '@/components/image/selebalo-moepi.jpg';

const teamMembers = [
  {
    name: "Selebalo Moepi",
    role: "CEO & Founder",
    image: selebaloMoepiImage,
    bio: "Visionary leader driving Koeneng Hub's mission to empower Africa's youth through technology.",
    linkedin: "https://www.linkedin.com/in/selebalo-jeffrey-moepi/",
    twitter: "#",
    aiHint: "man portrait leader"
  },
  {
    name: "Relebohile Boleke",
    role: "Director and Head of Technology",
    image: "https://placehold.co/300x300.png",
    bio: "Innovative technologist spearheading Koeneng Hub's tech initiatives and platform development.",
    linkedin: "#",
    twitter: "#",
    aiHint: "professional man portrait"
  },
  {
    name: "God",
    role: "The creator",
    image: "https://placehold.co/300x300.png",
    bio: "Passionate advocate for youth development, building strong communities and strategic alliances.",
    linkedin: "#",
    twitter: "#",
    aiHint: "professional woman smiling"
  },
];

const TeamSection = () => {
  return (
    <section id="team" className="py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl sm:text-4xl font-bold text-primary">Meet Our Team</h2>
          <p className="mt-2 text-lg text-muted-foreground">The Driving Force Behind Koeneng Hub</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <Card key={index} className="text-center overflow-hidden hover:shadow-xl transition-all duration-300 ease-in-out hover:scale-[1.02] hover:-translate-y-1">
              <CardHeader className="p-0">
                <div className="relative w-full h-64 bg-muted">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                    placeholder={typeof member.image !== 'string' ? 'blur' : undefined}
                    data-ai-hint={member.aiHint}
                  />
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <CardTitle className="font-headline text-xl text-foreground">{member.name}</CardTitle>
                <CardDescription className="text-primary font-medium mt-1">{member.role}</CardDescription>
                <p className="text-sm text-muted-foreground mt-3 mb-4 min-h-[3em]">{member.bio}</p>
                <div className="flex justify-center space-x-3">
                  <Link href={member.linkedin} target="_blank" rel="noopener noreferrer" aria-label={`${member.name} LinkedIn Profile`}>
                    <Linkedin className="w-5 h-5 text-muted-foreground hover:text-primary transition-colors" />
                  </Link>
                  <Link href={member.twitter} target="_blank" rel="noopener noreferrer" aria-label={`${member.name} Twitter Profile`}>
                    <Twitter className="w-5 h-5 text-muted-foreground hover:text-primary transition-colors" />
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
