'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { ChevronDown } from 'lucide-react'

const eventTypes = ['Hackathon', 'Meetup', 'Workshop']
const locations = ['Global', 'Europe', 'Asia', 'Americas']
const events = Array.from({ length: 6 }, (_, i) => ({
    id: i,
    type: eventTypes[i % eventTypes.length],
    title: `${eventTypes[i % eventTypes.length]} Event ${i + 1}`,
    date: new Date(2025, i % 12, i + 1).toLocaleDateString(),
    location: locations[i % locations.length],
    description: `This is a description for ${eventTypes[i % eventTypes.length]} event ${i + 1}.`,
}))

export default function EventsList() {
    const [selectedEventType, setSelectedEventType] = useState<string>('Hackathon')
    const [selectedLocation, setSelectedLocation] = useState<string>('')
    const [selectedDate, setSelectedDate] = useState<string>('')

    const [isOpen, setIsOpen] = useState(false)

    const toggleDropdown = () => setIsOpen(!isOpen)

    const handleSelectLocation = (location: string) => {
        setSelectedLocation(location)
        setIsOpen(false) // Dropdown kapat
    }

    return (
        <div className="max-w-7xl mx-auto px-4 py-6">
            <h1 className="text-3xl font-bold mb-6">Events List</h1>

            {/* Event Type Tabs */}
            <div className="mb-6 flex gap-4">
                {eventTypes.map((type) => (
                    <button
                        key={type}
                        className={`px-6 py-2 rounded-md text-sm font-medium ${selectedEventType === type ? 'bg-sBlue text-white' : 'bg-gray-200 text-sBlue'}`}
                        onClick={() => setSelectedEventType(type)}
                    >
                        {type}
                    </button>
                ))}
            </div>

            {/* Filters */}
            <div className="mb-6 flex gap-4">
                <div className="relative">
                    <label className="block text-sm font-medium mb-1">Location</label>

                    {/* Dropdown Button */}
                    <button
                        className="w-full px-4 py-2 border rounded-md text-left flex justify-between items-center"
                        onClick={toggleDropdown}
                    >
                        {selectedLocation || "Select Location"}
                        <ChevronDown className="ml-2" />
                    </button>

                    {/* Dropdown Menu */}
                    {isOpen && (
                        <div className="absolute left-0 w-full mt-1 bg-sBlue border rounded-md shadow-lg z-10">
                            {locations.map((location) => (
                                <button
                                    key={location}
                                    className="w-full text-left px-4 py-2 hover:bg-gray-100 hover:text-sBlue"
                                    onClick={() => handleSelectLocation(location)}
                                >
                                    {location}
                                </button>
                            ))}
                        </div>
                    )}
                </div>

                <div>
                    <label className="block text-sm font-medium mb-1">Date</label>
                    <input
                        type="date"
                        className="w-full px-4 py-2 border rounded-md"
                        value={selectedDate}
                        onChange={(e) => setSelectedDate(e.target.value)}
                    />
                </div>
            </div>

            {/* Event Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {events
                    .filter((event) => event.type === selectedEventType)
                    .filter((event) => (selectedLocation ? event.location === selectedLocation : true))
                    .filter((event) => (selectedDate ? event.date === selectedDate : true))
                    .map((event) => (
                        <div
                            key={event.id}
                            className="bg-sBlue rounded-xl shadow-md p-6 flex flex-col"
                        >
                            {/* Event Type Tag */}
                            <div className="mb-4">
                                <span className="px-4 py-2 rounded-full text-sm font-semibold bg-blue-100 text-sBlue">
                                    {event.type}
                                </span>
                            </div>

                            {/* Event Title */}
                            <h3 className="text-lg font-semibold mb-2">{event.title}</h3>

                            {/* Event Date and Location */}
                            <div className="text-sm font-semibold text-peach mb-4">
                                <p>{event.date}</p>
                                <p>{event.location}</p>
                            </div>

                            {/* Register Button */}
                            <Button className="w-full mt-auto hover:bg-bBlue">Register</Button>
                        </div>
                    ))}
            </div>
        </div>
    )
}
