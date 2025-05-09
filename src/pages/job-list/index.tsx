import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { SliderComponent } from '@/components/ui/slider'
import { Switch } from '@headlessui/react'
import Image from 'next/image'
import { useEffect, useState } from 'react'

const techOptions = ['React', 'Vue', 'Angular', 'Node.js', 'Python', 'Java'];

export default function JobsList() {
    const [selectedTech, setSelectedTech] = useState('')
    const [rep, setRep] = useState(0)
    const [remote, setRemote] = useState(false)
    const [searchQuery, setSearchQuery] = useState('')

    const [jobData, setJobData] = useState<{ id: number; companyName: string; position: string; level: string; logo: string; remote: boolean; }[]>([]);

    useEffect(() => {
        const data = Array.from({ length: 9 }, (_, i) => ({
            id: i,
            companyName: `Company ${i + 1}`,
            position: `Position ${i + 1}`,
            level: ['Junior', 'Mid', 'Senior'][Math.floor(Math.random() * 3)],
            logo: `https://api.dicebear.com/7.x/shapes/svg?seed=company${i}`,
            remote: Math.random() > 0.5, // Randomize remote jobs
        }));
        setJobData(data);
    }, []);  // Run only on the client after the component mounts


    return (
        <div className="max-w-7xl mx-auto px-4 py-6">
            <h1 className="text-3xl font-bold mb-6">Jobs List</h1>

            {/* Search Bar */}
            <Input
                placeholder="Search jobs..."
                className="mb-6 w-full max-w-lg"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
            />

            {/* Filters Panel */}
            <div className="mb-6">
                <div className="flex gap-6 mb-4">
                    {/* Tech Filter */}
                    <div>
                        <label className="text-sm font-medium mb-1 block">Tech</label>
                        <select
                            className="w-full px-4 py-2 border rounded-md"
                            value={selectedTech}
                            onChange={(e) => setSelectedTech(e.target.value)}
                        >
                            <option value="">All Technologies</option>
                            {techOptions.map((tech) => (
                                <option key={tech} value={tech}>
                                    {tech}
                                </option>
                            ))}
                        </select>
                    </div>

                    {/* Rep Filter */}
                    <div>
                        <label className="text-sm font-medium mb-1 block">Reputation: {rep}</label>
                        <SliderComponent
                            defaultValue={[rep]}
                            max={10}
                            step={1}
                            onValueChange={([value]) => setRep(value)}
                        />
                    </div>

                    {/* Remote Filter */}
                    <div>
                        <label className="text-sm font-medium mb-1 block">Remote</label>
                        <Switch
                            checked={remote}
                            onChange={setRemote}
                            className={`${remote ? 'bg-blue-600' : 'bg-gray-300'
                                } relative inline-flex h-6 w-11 items-center rounded-full`}
                        >
                            <span
                                className={`${remote ? 'translate-x-5' : 'translate-x-1'
                                    } inline-block h-4 w-4 transform rounded-full bg-white transition`}
                            />
                        </Switch>
                    </div>

                    {/* Sort Filter */}
                    <div>
                        <label className="text-sm font-medium mb-1 block">Sort</label>
                        <select className="w-full px-4 py-2 border rounded-md">
                            <option>Newest</option>
                            <option>Oldest</option>
                            <option>Highest Reputation</option>
                        </select>
                    </div>
                </div>
            </div>

            {/* Job Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {jobData
                    .filter((job) => !selectedTech || job.position.includes(selectedTech))
                    .filter((job) => job.remote === remote)
                    .filter((job) => job.level === 'Senior' || rep >= 5) // Example logic for reputation filter
                    .filter((job) => job.position.toLowerCase().includes(searchQuery.toLowerCase()))
                    .map((job) => (
                        <div key={job.id} className="bg-sBlue rounded-xl shadow p-4 flex flex-col items-center text-center">
                            <Image
                                src={job.logo}
                                alt={job.companyName}
                                width={150}
                                height={150}
                                className="rounded-full mb-3"
                            />
                            <h3 className="text-lg font-semibold">{job.position}</h3>
                            <p className="text-sm text-gray-500">{job.companyName}</p>
                            <span className="text-sm font-semibold text-gray-600">{job.level}</span>
                            <Button className="mt-3 w-full hover:bg-peach hover:text-white">Apply</Button>
                        </div>
                    ))}
            </div>
        </div>
    )
}
