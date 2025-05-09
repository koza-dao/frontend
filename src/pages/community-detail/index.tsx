'use client'

import { useState } from 'react'
import ReactMarkdown from 'react-markdown'
import Image from 'next/image' // Import Image component
import { Button } from '@/components/ui/button'

const communityData = {
    name: 'Tech Enthusiasts',
    bannerUrl: 'https:/picsum.photos/1500/500',
    description: 'A community for tech lovers. **Join us to share knowledge and build amazing projects!**',
    membersCount: 1200,
    activeEvents: 3,
    events: [
        { id: 1, name: 'Tech Conference 2025', date: '2025-06-15' },
        { id: 2, name: 'AI Hackathon', date: '2025-07-01' },
        { id: 3, name: 'Web3 Summit', date: '2025-08-10' },
    ],
    members: [
        { id: 1, avatar: 'https://api.dicebear.com/7.x/shapes/svg?seed=member1' },
        { id: 2, avatar: 'https://api.dicebear.com/7.x/shapes/svg?seed=member2' },
        { id: 3, avatar: 'https://api.dicebear.com/7.x/shapes/svg?seed=member3' },
        { id: 4, avatar: 'https://api.dicebear.com/7.x/shapes/svg?seed=member4' },
    ],
    posts: [
        { id: 1, user: 'Anonymous', content: 'Looking forward to the Tech Conference! Who’s going?' },
        { id: 2, user: 'Anonymous', content: 'Can someone explain the latest in AI to me?' },
    ],
}

export default function CommunityDetail() {
    const [isJoined, setIsJoined] = useState(false)

    const handleJoinLeave = () => {
        setIsJoined(!isJoined)
    }

    return (
        <div className="max-w-7xl mx-auto px-4 py-6">
            {/* Banner */}
            <div className="relative mb-6">
                <Image
                    src={communityData.bannerUrl}
                    alt="Community Banner"
                    layout="responsive" // Ensure it adapts to different screen sizes
                    width={1500} // Specify width
                    height={500} // Specify height
                    className="w-full h-64 object-cover rounded-lg shadow-md"
                />
                <div className="absolute top-4 left-4 text-white text-4xl font-bold">{communityData.name}</div>
            </div>

            {/* Community Description */}
            <div className="mb-6">
                <div className="prose max-w-none">
                    <ReactMarkdown>{communityData.description}</ReactMarkdown>
                </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
                <div className="bg-sBlue p-4 rounded-lg shadow">
                    <h4 className="text-lg font-semibold">Members</h4>
                    <p>{communityData.membersCount} members</p>
                </div>
                <div className="bg-sBlue p-4 rounded-lg shadow">
                    <h4 className="text-lg font-semibold">Active Events</h4>
                    <p>{communityData.activeEvents} events</p>
                </div>
            </div>

            {/* Upcoming Events */}
            <div className="mb-6">
                <h3 className="text-2xl font-semibold mb-4">Upcoming Events</h3>
                <ul className="list-disc pl-6">
                    {communityData.events.map((event) => (
                        <li key={event.id}>
                            {event.name} - <strong>{event.date}</strong>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Members */}
            <div className="mb-6">
                <h3 className="text-2xl font-semibold mb-4">Members</h3>
                <div className="grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-8 gap-4">
                    {communityData.members.map((member) => (
                        <div key={member.id} className="flex justify-center items-center">
                            <Image
                                src={member.avatar}
                                alt={`Avatar of member ${member.id}`}
                                width={48} // Specify width
                                height={48} // Specify height
                                className="w-12 h-12 rounded-full"
                            />
                        </div>
                    ))}
                </div>
            </div>

            {/* Join / Leave Button */}
            <div className="mb-6 flex justify-center">
                <Button className="w-full max-w-xs bg-white text-sBlue font-semibold" onClick={handleJoinLeave}>
                    {isJoined ? 'Leave Community' : 'Join Community'}
                </Button>
            </div>

            {/* Discussion Feed */}
            <div className="mb-6">
                <h3 className="text-2xl font-semibold mb-4">Discussion Feed</h3>
                <div className="space-y-4">
                    {communityData.posts.map((post) => (
                        <div key={post.id} className="bg-sBlue p-4 rounded-lg shadow">
                            <p className="font-semibold">{post.user}</p>
                            <p>{post.content}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
