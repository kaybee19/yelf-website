"use client";

import { Facebook, Twitter, Linkedin, Share2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

interface ShareButtonsProps {
  url: string
  title: string
  description: string
  className?: string
}

export function ShareButtons({ url, title, description, className = "" }: ShareButtonsProps) {
  const encodedUrl = encodeURIComponent(url)
  const encodedTitle = encodeURIComponent(title)
  const encodedDescription = encodeURIComponent(description)

  const shareLinks = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
    twitter: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}&via=YCTF`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
  }

  const handleShare = (platform: keyof typeof shareLinks) => {
    const shareUrl = shareLinks[platform]
    window.open(shareUrl, '_blank', 'width=600,height=400,scrollbars=yes,resizable=yes')
  }

  const handleNativeShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title,
          text: description,
          url,
        })
      } catch (error) {
        console.log('Error sharing:', error)
      }
    } else {
      // Fallback to copying URL to clipboard
      try {
        await navigator.clipboard.writeText(url)
        // You could add a toast notification here
        alert('Link copied to clipboard!')
      } catch (error) {
        console.log('Error copying to clipboard:', error)
      }
    }
  }

  return (
    <div className={`flex items-center space-x-2 ${className}`}>
      {/* Facebook */}
      <Button
        variant="outline"
        size="sm"
        onClick={() => handleShare('facebook')}
        className="flex items-center space-x-2"
      >
        <Facebook className="h-4 w-4" />
        <span className="hidden sm:inline">Facebook</span>
      </Button>

      {/* Twitter */}
      <Button
        variant="outline"
        size="sm"
        onClick={() => handleShare('twitter')}
        className="flex items-center space-x-2"
      >
        <Twitter className="h-4 w-4" />
        <span className="hidden sm:inline">Twitter</span>
      </Button>

      {/* LinkedIn */}
      <Button
        variant="outline"
        size="sm"
        onClick={() => handleShare('linkedin')}
        className="flex items-center space-x-2"
      >
        <Linkedin className="h-4 w-4" />
        <span className="hidden sm:inline">LinkedIn</span>
      </Button>

      {/* Native Share / Copy Link */}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" size="sm">
            <Share2 className="h-4 w-4 mr-2" />
            More
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem onClick={handleNativeShare}>
            <Share2 className="h-4 w-4 mr-2" />
            Share via...
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => navigator.clipboard.writeText(url)}>
            Copy Link
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
} 