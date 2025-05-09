import React, { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Switch } from '@headlessui/react'

const ProfileEdit = () => {
    const [nickname, setNickname] = useState('')
    const [bio, setBio] = useState('')
    const [interests, setInterests] = useState('')
    const [email, setEmail] = useState('')
    const [notificationsEnabled, setNotificationsEnabled] = useState(false)

    // Ensure the switch state is correctly initialized on the client
    useEffect(() => {
        setNotificationsEnabled(false); // Or any default state
    }, []);

    const handleSave = () => {
        alert('Profile saved successfully!')
    }

    return (
        <div className="max-w-7xl mx-auto px-4 py-6">
            <h2 className="text-3xl font-bold mb-6">Edit Profile</h2>

            <div className="mb-4">
                <label className="text-sm font-medium mb-1 block">Nickname (Rumuz)</label>
                <Input
                    placeholder="Enter your nickname"
                    value={nickname}
                    onChange={(e) => setNickname(e.target.value)}
                    className="w-full px-4 py-2 border rounded-md"
                />
            </div>

            <div className="mb-4">
                <label className="text-sm font-medium mb-1 block">Bio</label>
                <Input
                    as="textarea"
                    placeholder="Tell us about yourself"
                    value={bio}
                    onChange={(e) => setBio(e.target.value)}
                    className="w-full px-4 py-2 border rounded-md"
                />
            </div>

            <div className="mb-4">
                <label className="text-sm font-medium mb-1 block">Interests</label>
                <Input
                    placeholder="What are you interested in?"
                    value={interests}
                    onChange={(e) => setInterests(e.target.value)}
                    className="w-full px-4 py-2 border rounded-md"
                />
            </div>

            <div className="mb-4">
                <label className="text-sm font-medium mb-1 block">Email</label>
                <Input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-2 border rounded-md"
                />
            </div>

            <div className="mb-6">
                <label className="text-sm font-medium mb-1 block">Enable Notifications</label>
                <Switch
                    checked={notificationsEnabled}
                    onChange={setNotificationsEnabled}
                    className={`${notificationsEnabled ? 'bg-blue-600' : 'bg-gray-300'
                        } relative inline-flex h-6 w-11 items-center rounded-full`}
                >
                    <span
                        className={`${notificationsEnabled ? 'translate-x-5' : 'translate-x-1'
                            } inline-block h-4 w-4 transform rounded-full bg-white transition`}
                    />
                </Switch>
            </div>

            <Button onClick={handleSave} className="w-full mt-4">
                Save
            </Button>
        </div>
    )
}

export default ProfileEdit
