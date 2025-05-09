'use client'

import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { SliderComponent } from '@/components/ui/slider'
import { Button } from '@/components/ui/button'

const interests = ['Gaming', 'Tech', 'Art', 'Music']
const locations = ['Global', 'Europe', 'Asia', 'Americas']

const communityData = Array.from({ length: 9 }, (_, i) => ({
    id: i,
    name: `Community ${i + 1}`,
    members: Math.floor(Math.random() * 10000),
    logo: `https://api.dicebear.com/7.x/shapes/svg?seed=community${i}`,
}))

export default function DiscoverCommunities() {
    const [filtersOpen, setFiltersOpen] = useState(true)
    const [selectedInterest, setSelectedInterest] = useState('')
    const [selectedLocation, setSelectedLocation] = useState('')
    const [minMembers, setMinMembers] = useState(0)
    const [searchQuery, setSearchQuery] = useState('')

    // Search query filter
    const filteredCommunities = communityData
        .filter((community) =>
            community.name.toLowerCase().includes(searchQuery.toLowerCase())
        )
        .filter((c) => c.members >= minMembers)
        .filter((c) => selectedInterest ? c.name.includes(selectedInterest) : true)

    return (
        <div className="max-w-7xl mx-auto px-4 py-6">
            <h1 className="text-3xl font-bold mb-6">Discover Communities</h1>

            {/* Search Bar */}
            <Input
                placeholder="Search communities..."
                className="mb-6 w-full max-w-lg"
                value={searchQuery} // bind search query to the input field
                onChange={(e) => setSearchQuery(e.target.value)} // update the search query state
            />

            {/* Filters */}
            <div className="mb-6">
                <button
                    onClick={() => setFiltersOpen(!filtersOpen)}
                    className="flex items-center gap-2 text-sm font-medium text-gray-700"
                >
                    Filters {filtersOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                </button>

                {filtersOpen && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
                        {/* Interest */}
                        <div>
                            <label className="text-sm font-medium mb-1 block">Interest</label>
                            <select
                                className="w-full border rounded px-3 py-2"
                                value={selectedInterest}
                                onChange={(e) => setSelectedInterest(e.target.value)}
                            >
                                <option value="">All</option>
                                {interests.map((i) => (
                                    <option key={i} value={i}>
                                        {i}
                                    </option>
                                ))}
                            </select>
                        </div>

                        {/* Location */}
                        <div>
                            <label className="text-sm font-medium mb-1 block">Location</label>
                            <select
                                className="w-full border rounded px-3 py-2"
                                value={selectedLocation}
                                onChange={(e) => setSelectedLocation(e.target.value)}
                            >
                                <option value="">All</option>
                                {locations.map((l) => (
                                    <option key={l} value={l}>
                                        {l}
                                    </option>
                                ))}
                            </select>
                        </div>

                        {/* Member count */}
                        <div>
                            <label className="text-sm font-medium mb-1 block">Min. Members: {minMembers}</label>
                            <SliderComponent
                                defaultValue={[minMembers]}
                                max={10000}
                                step={100}
                                onValueChange={([val]) => setMinMembers(val)}
                            />
                        </div>
                    </div>
                )}
            </div>

            {/* Community Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {filteredCommunities.map((community) => (
                    <div
                        key={community.id}
                        className="bg-sBlue rounded-xl shadow p-4 flex flex-col items-center text-center"
                    >
                        <img src={community.logo} alt="" className="w-16 h-16 rounded-full mb-3" />
                        <h3 className="text-lg font-semibold">{community.name}</h3>
                        <p className="text-sm text-gray-500">{community.members} members</p>
                        <Button className="mt-3 w-full bg-white text-sBlue font-semibold">Join</Button>
                    </div>
                ))}
            </div>
        </div>
    )
}
