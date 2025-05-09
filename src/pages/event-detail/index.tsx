import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Modal } from '@/components/ui/modal'
import { Avatar } from '@/components/ui/avatar'

const event = {
    title: 'Hackathon for Innovation',
    type: 'Hackathon',
    date: '2025-05-15',
    location: 'New York, USA',
    description: `
        Join us for a weekend of innovation, coding, and fun! This hackathon brings together the brightest minds in tech to solve some of the most pressing challenges.
    `,
    attendees: [
        { id: 1, name: 'Alice', avatar: 'https://randomuser.me/api/portraits/women/1.jpg' },
        { id: 2, name: 'Bob', avatar: 'https://randomuser.me/api/portraits/men/2.jpg' },
        { id: 3, name: 'Charlie', avatar: 'https://randomuser.me/api/portraits/men/3.jpg' }
    ],
    teams: [
        { id: 1, name: 'Team Alpha', members: 4 },
        { id: 2, name: 'Team Beta', members: 3 }
    ]
}

export default function EventDetail() {
    const [isModalOpen, setIsModalOpen] = useState(false)

    const handleRegister = () => {
        setIsModalOpen(true)
    }

    const handleCloseModal = () => {
        setIsModalOpen(false)
    }

    return (
        <div className="max-w-7xl mx-auto px-4 py-6">
            {/* Event Header */}
            <div className="flex items-center justify-between mb-6">
                <h1 className="text-4xl font-bold">{event.title}</h1>
                <div className="text-sm text-gray-500">
                    <span className="font-semibold">{event.type}</span> | {event.date} | {event.location}
                </div>
            </div>

            {/* Event Description */}
            <div className="mb-6 text-lg text-gray-700">
                <p>{event.description}</p>
            </div>

            {/* Register Button */}
            <div className="mb-6">
                <Button onClick={handleRegister}>Register</Button>
            </div>

            {/* Teams Section */}
            <div className="mb-6">
                <h3 className="text-2xl font-semibold mb-4">Teams</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {event.teams.map((team) => (
                        <div
                            key={team.id}
                            className="bg-sBlue p-4 rounded-lg shadow-md flex flex-col items-center text-center"
                        >
                            <h4 className="font-semibold text-lg">{team.name}</h4>
                            <p className="text-sm text-gray-500">Members: {team.members}</p>
                        </div>
                    ))}
                </div>
                <Button className="mt-4">Create Team</Button>
            </div>

            {/* Attendees Section */}
            <div>
                <h3 className="text-2xl font-semibold mb-4">Attendees</h3>
                <div className="flex space-x-4">
                    {event.attendees.map((attendee) => (
                        <Avatar key={attendee.id} src={attendee.avatar} alt={attendee.name} />
                    ))}
                </div>
            </div>

            {/* Register Modal */}
            <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
                <div className="p-6">
                    <h2 className="text-xl font-semibold mb-4">Register for {event.title}</h2>
                    <p className="mb-4">Please confirm your registration for the event.</p>
                    <div className="flex gap-4">
                        <Button onClick={handleCloseModal} className="w-full">Cancel</Button>
                        <Button className="w-full">Confirm Registration</Button>
                    </div>
                </div>
            </Modal>
        </div>
    )
}
