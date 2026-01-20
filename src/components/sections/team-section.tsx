import Image from 'next/image';
import { Linkedin, Mail } from 'lucide-react';
import Link from 'next/link';
import samImage from '@/components/image/sam.jpg';
import selebaloMopeiImage from '@/components/image/moepi.jpg';

const teamMembers = [
    {
        name: "Selebalo Moepi",
        role: "Director & Lead Developer",
        image: selebaloMopeiImage,
        bio: "The visionary architect of our future. Selebalo doesn't just write code; he composes symphonies of logic that power our innovative solutions. His leadership is the compass that guides Koeneng Hub toward a brighter, tech-driven tomorrow.",
        linkedin: "https://www.linkedin.com/in/selebalo-jeffrey-moepi/",
        email: "jeffreymoepi@gmail.com",
    },
];

const TeamSection = () => {
    return (
        <section id="team" className="py-24 sm:py-32">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="font-headline text-4xl sm:text-5xl font-bold text-primary">The Minds Behind the Mission</h2>
                    <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">Meet the passionate leaders dedicated to building a future where potential meets opportunity through technology.</p>
                </div>
                <div className="space-y-24">
                    {teamMembers.map((member, index) => (
                        <div key={member.name} className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 items-center">
                            <div className={`relative h-96 md:h-full group ${index % 2 === 1 ? 'md:order-last' : ''}`}>
                                <Image
                                    src={member.image}
                                    alt={member.name}
                                    fill
                                    className="rounded-lg object-cover shadow-lg transform group-hover:scale-105 transition-transform duration-500 ease-in-out"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent rounded-lg"></div>
                            </div>
                            <div className="md:col-span-2">
                                <h3 className="font-headline text-3xl font-bold text-foreground">{member.name}</h3>
                                <p className="mt-1 text-xl font-medium text-primary">{member.role}</p>
                                <div className="prose prose-lg max-w-none text-muted-foreground mt-4">
                                    <p>{member.bio}</p>
                                </div>
                                <div className="mt-6 flex space-x-4">
                                    <Link href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                                        <Linkedin className="w-6 h-6" />
                                        <span className="sr-only">LinkedIn</span>
                                    </Link>
                                    <Link href={`mailto:${member.email}`} className="text-muted-foreground hover:text-primary transition-colors">
                                        <Mail className="w-6 h-6" />
                                        <span className="sr-only">Email</span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TeamSection;
