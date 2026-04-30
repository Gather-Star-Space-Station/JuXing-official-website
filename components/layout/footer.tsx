import Link from "next/link"
import { Container } from "@/components/ui/container"
import { Mail, Phone, MapPin } from "lucide-react"

const footerLinks = {
  company: [
    { label: "关于我们", href: "/about" },
<<<<<<< HEAD
    { label: "知识产权服务", href: "/products" },
    { label: "成功案例", href: "/products#cases" },
  ],
  products: [
    { label: "数据知识产权确权", href: "/products" },
    { label: "数据合规服务", href: "/products#compliance" },
    { label: "知识产权维权", href: "/products#rights" },
  ],
  support: [
    { label: "联系我们", href: "/contact" },
=======
    { label: "新闻动态", href: "/blog" },
    { label: "联系我们", href: "/contact" },
  ],
  products: [
    { label: "产品服务", href: "/products" },
    { label: "解决方案", href: "/products#solutions" },
    { label: "案例展示", href: "/products#cases" },
  ],
  support: [
    { label: "帮助中心", href: "#help" },
>>>>>>> 73f09a0092d748ebeafc9357cd25f70301605243
    { label: "隐私政策", href: "#privacy" },
    { label: "服务条款", href: "#terms" },
  ],
}

export function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-[#F8FAFC]">
      <Container>
        <div className="grid gap-8 py-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
<<<<<<< HEAD
            <h3 className="mb-4 text-lg font-bold text-[#0F172A]">聚星数据知识产权有限公司</h3>
            <p className="text-sm text-[#334155]">
              专业数据知识产权与合规服务机构，为企业提供确权、布局、合规、维权一站式解决方案
=======
            <h3 className="mb-4 text-lg font-bold text-[#0F172A]">企业官网</h3>
            <p className="text-sm text-[#334155]">
              专业的解决方案提供商，致力于为客户创造价值
>>>>>>> 73f09a0092d748ebeafc9357cd25f70301605243
            </p>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="mb-4 text-sm font-semibold text-[#0F172A]">公司</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="cursor-pointer text-sm text-[#334155] transition-colors hover:text-[#0369A1]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="mb-4 text-sm font-semibold text-[#0F172A]">产品</h4>
            <ul className="space-y-2">
              {footerLinks.products.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="cursor-pointer text-sm text-[#334155] transition-colors hover:text-[#0369A1]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="mb-4 text-sm font-semibold text-[#0F172A]">联系方式</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm text-[#334155]">
                <Phone className="h-4 w-4 text-[#0369A1]" />
<<<<<<< HEAD
                <span>18072740873</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-[#334155]">
                <Mail className="h-4 w-4 text-[#0369A1]" />
                <span>2787326121@qq.com</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-[#334155]">
                <MapPin className="h-4 w-4 text-[#0369A1]" />
                <span>广东省广州市天河区</span>
=======
                <span>400-123-4567</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-[#334155]">
                <Mail className="h-4 w-4 text-[#0369A1]" />
                <span>contact@example.com</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-[#334155]">
                <MapPin className="h-4 w-4 text-[#0369A1]" />
                <span>北京市朝阳区</span>
>>>>>>> 73f09a0092d748ebeafc9357cd25f70301605243
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-200 py-6 text-center text-sm text-[#334155]">
<<<<<<< HEAD
          <p>© 2025–2026 聚星数据知识产权有限公司 版权所有</p>
=======
          <p>&copy; {new Date().getFullYear()} 企业官网. All rights reserved.</p>
>>>>>>> 73f09a0092d748ebeafc9357cd25f70301605243
        </div>
      </Container>
    </footer>
  )
}
