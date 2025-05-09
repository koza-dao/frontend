import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Modal } from '@/components/ui/modal'
import { useState } from 'react'
import Image from 'next/image'

const jobDetails = {
    id: 1,
    companyName: 'Company X',
    position: 'Senior Developer',
    level: 'Senior',
    logo: 'https://randomuser.me/api/portraits/men/1.jpg',
    description: 'A great opportunity to work on exciting projects...',
}

export default function JobDetail() {
    const [applyModalOpen, setApplyModalOpen] = useState(false)
    const [email, setEmail] = useState('')
    const [motivation, setMotivation] = useState('')
    const [isSubmitting, setIsSubmitting] = useState(false)

    const handleSubmit = async () => {
        setIsSubmitting(true)
        // Simulate on-chain tx preview and submission
        setTimeout(() => {
            alert('Application submitted successfully!')
            setIsSubmitting(false)
            setApplyModalOpen(false)
        }, 2000)
    }

    return (
        <div className="max-w-4xl mx-auto px-4 py-6">
            {/* Job Header */}
            <div className="flex items-center mb-6">
                <Image
                    src={jobDetails.logo}
                    alt={jobDetails.companyName}
                    width={50}
                    height={50}
                    className="rounded-full mr-4"
                />
                <div>
                    <h1 className="text-3xl font-bold">{jobDetails.position}</h1>
                    <p className="text-xl text-gray-600">{jobDetails.companyName}</p>
                    <span className="text-sm text-gray-500">{jobDetails.level} Level</span>
                </div>
            </div>

            {/* Job Description */}
            <div className="mb-6">
                <h2 className="text-2xl font-semibold mb-2">Job Description</h2>
                <p className="text-gray-700">{jobDetails.description}</p>
            </div>

            {/* Apply Button */}
            <Button onClick={() => setApplyModalOpen(true)} className="w-full max-w-md">
                Apply Now
            </Button>

            {/* Apply Modal */}
            <Modal
                isOpen={applyModalOpen}
                onClose={() => setApplyModalOpen(false)}
            >
                <div className="p-6">
                    <h3 className="text-2xl font-semibold mb-4">Apply for {jobDetails.position}</h3>

                    {/* Email & Motivation Input */}
                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-2">Email</label>
                        <Input
                            type="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-4 py-2 border rounded-md"
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-2">Motivation</label>
                        <Input
                            as="textarea"
                            placeholder="Why do you want to join?"
                            value={motivation}
                            onChange={(e) => setMotivation(e.target.value)}
                            className="w-full px-4 py-2 border rounded-md"
                        />
                    </div>

                    {/* On-chain Transaction Preview */}
                    <div className="mb-4 text-sm text-gray-500">
                        <p>On-chain Transaction Preview:</p>
                        <pre className="bg-gray-100 p-3 rounded-md">
                            {`{
  "email": "${email}",
  "motivation": "${motivation}",
  "jobId": ${jobDetails.id}
}`}
                        </pre>
                    </div>

                    {/* Submit Button */}
                    <Button
                        onClick={handleSubmit}
                        className="w-full"
                        disabled={isSubmitting || !email || !motivation}
                    >
                        {isSubmitting ? 'Submitting...' : 'Submit Application'}
                    </Button>
                </div>
            </Modal>
        </div>
    )
}
