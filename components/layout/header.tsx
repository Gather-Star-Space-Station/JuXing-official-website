"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Container } from "@/components/ui/container"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const navItems = [
  { href: "/", label: "首页" },
  { href: "/about", label: "关于我们" },
<<<<<<< HEAD
  { href: "/products", label: "知识产权服务" },
  { href: "/products#compliance", label: "数据合规服务" },
  { href: "/products#cases", label: "成功案例" },
=======
  { href: "/products", label: "产品服务" },
  { href: "/blog", label: "新闻动态" },
>>>>>>> 73f09a0092d748ebeafc9357cd25f70301605243
  { href: "/contact", label: "联系我们" },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
      <Container>
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="text-xl font-bold text-[#0F172A] transition-colors hover:text-[#0369A1]"
          >
<<<<<<< HEAD
            聚星数据知识产权
=======
            企业官网
>>>>>>> 73f09a0092d748ebeafc9357cd25f70301605243
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex md:gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-[#334155] transition-colors hover:text-[#0369A1] focus-visible:text-[#0369A1]"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:block">
<<<<<<< HEAD
            <Button size="sm">商务合作</Button>
=======
            <Button size="sm">联系销售</Button>
>>>>>>> 73f09a0092d748ebeafc9357cd25f70301605243
          </div>

          {/* Mobile menu button */}
          <button
            className="cursor-pointer md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6 text-[#0F172A]" />
            ) : (
              <Menu className="h-6 w-6 text-[#0F172A]" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={cn("md:hidden", mobileMenuOpen ? "block" : "hidden")}>
          <nav className="flex flex-col space-y-4 pb-4 pt-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-base font-medium text-[#334155] hover:text-[#0369A1]"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Button size="sm" className="w-full">
<<<<<<< HEAD
              商务合作
=======
              联系销售
>>>>>>> 73f09a0092d748ebeafc9357cd25f70301605243
            </Button>
          </nav>
        </div>
      </Container>
    </header>
  )
}
