import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { constructMetadata } from "@/lib/seo";
import { ArrowRight } from "lucide-react";

export const metadata = constructMetadata({
<<<<<<< HEAD
<<<<<<< HEAD
  title: "知识产权服务",
  description: "聚星数据知识产权提供数据确权、知识产权申请、数据合规、维权诉讼等全方位服务",
=======
  title: "产品服务",
  description: "了解我们提供的专业产品和服务",
>>>>>>> 73f09a0092d748ebeafc9357cd25f70301605243
=======
  title: "产品服务",
  description: "了解我们提供的专业产品和服务",
>>>>>>> 73f09a0092d748ebeafc9357cd25f70301605243
});

const products = [
  {
<<<<<<< HEAD
<<<<<<< HEAD
    id: "rights",
    title: "数据知识产权确权",
    description: "数据资产权属界定、数据作品著作权登记、数据库知识产权保护，确保企业数据资产合法归属",
    features: ["数据资产权属界定", "数据作品著作权登记", "数据库知识产权保护", "数据资产价值评估"],
  },
  {
    id: "application",
    title: "知识产权申请与布局",
    description: "商标注册、专利申请、版权登记、知识产权整体布局规划，构建企业无形资产护城河",
    features: ["商标注册", "专利申请", "版权登记", "知识产权布局规划"],
  },
  {
    id: "compliance",
    title: "数据合规服务",
    description: "企业数据合规审查、隐私合规整改、数据跨境合规、制度搭建，降低企业合规风险",
    features: ["数据合规审查", "隐私合规整改", "数据跨境合规", "合规制度搭建"],
  },
  {
    id: "rights-protection",
    title: "知识产权维权与诉讼支持",
    description: "侵权监测、固证取证、律师函、诉讼支持、争议解决，全方位保护企业知识产权",
    features: ["侵权监测预警", "固证取证服务", "律师函发送", "诉讼支持"],
  },
  {
    id: "consultant",
    title: "企业知识产权顾问",
    description: "常年知识产权顾问、风险预警、合规培训，提供专业持续的法律支撑",
    features: ["常年法律顾问", "风险预警", "合规培训", "战略咨询"],
=======
=======
>>>>>>> 73f09a0092d748ebeafc9357cd25f70301605243
    id: "1",
    title: "企业管理系统",
    description: "全面的企业资源管理解决方案，提升运营效率",
    features: ["流程自动化", "数据分析", "多端同步"],
  },
  {
    id: "2",
    title: "客户关系管理",
    description: "智能化的客户管理工具，提升客户满意度",
    features: ["客户画像", "销售跟进", "数据报表"],
  },
  {
    id: "3",
    title: "数据分析平台",
    description: "强大的数据分析能力，助力业务决策",
    features: ["实时分析", "可视化报表", "预测模型"],
  },
  {
    id: "4",
    title: "移动办公应用",
    description: "随时随地办公，提升团队协作效率",
    features: ["即时通讯", "任务管理", "文件共享"],
<<<<<<< HEAD
>>>>>>> 73f09a0092d748ebeafc9357cd25f70301605243
=======
>>>>>>> 73f09a0092d748ebeafc9357cd25f70301605243
  },
];

export default function ProductsPage() {
  return (
    <>
      <section className="bg-gray-50 py-20">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-4xl font-bold text-gray-900 md:text-5xl">
<<<<<<< HEAD
<<<<<<< HEAD
              知识产权服务
            </h1>
            <p className="text-lg text-gray-600">
              为企业提供数据确权、布局、合规、维权一站式解决方案
=======
=======
>>>>>>> 73f09a0092d748ebeafc9357cd25f70301605243
              产品服务
            </h1>
            <p className="text-lg text-gray-600">
              为企业提供全方位的数字化解决方案
<<<<<<< HEAD
>>>>>>> 73f09a0092d748ebeafc9357cd25f70301605243
=======
>>>>>>> 73f09a0092d748ebeafc9357cd25f70301605243
            </p>
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <div className="grid gap-8 md:grid-cols-2">
            {products.map((product) => (
              <Card key={product.id}>
                <h3 className="mb-3 text-2xl font-bold text-gray-900">
                  {product.title}
                </h3>
                <p className="mb-4 text-gray-600">{product.description}</p>
                <ul className="mb-6 space-y-2">
                  {product.features.map((feature) => (
                    <li key={feature} className="flex items-center text-sm text-gray-600">
                      <span className="mr-2 h-1.5 w-1.5 rounded-full bg-blue-600" />
                      {feature}
                    </li>
                  ))}
                </ul>
<<<<<<< HEAD
<<<<<<< HEAD
                <Link href={`/contact`}>
                  <Button variant="outline" size="sm">
                    立即咨询
=======
                <Link href={`/products/${product.id}`}>
                  <Button variant="outline" size="sm">
                    了解详情
>>>>>>> 73f09a0092d748ebeafc9357cd25f70301605243
=======
                <Link href={`/products/${product.id}`}>
                  <Button variant="outline" size="sm">
                    了解详情
>>>>>>> 73f09a0092d748ebeafc9357cd25f70301605243
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </Card>
            ))}
          </div>
        </Container>
      </section>
<<<<<<< HEAD
<<<<<<< HEAD

      <section id="cases" className="bg-gray-50 py-20">
        <Container>
          <div className="mx-auto max-w-3xl text-center mb-12">
            <h2 className="mb-4 text-3xl font-bold text-gray-900">成功案例</h2>
            <p className="text-lg text-gray-600">
              服务覆盖制造、互联网、科创、跨境电商等多个领域
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card className="p-6">
              <div className="mb-3 inline-block rounded bg-blue-50 px-2 py-1 text-xs font-medium text-blue-600">数据知识产权确权</div>
              <h3 className="mb-2 text-xl font-semibold text-gray-900">某AI科技公司数据集确权登记</h3>
              <p className="text-sm text-gray-600 mb-4">为一家专注于计算机视觉的AI企业，对其核心训练数据集进行权属界定与著作权登记。通过数据资产梳理、权属证明链搭建，成功完成200余项数据作品的著作权登记，帮助企业确立数据资产法律地位，为后续融资与数据交易奠定基础。</p>
              <p className="text-xs text-gray-500">成果：完成200+数据作品登记，企业估值提升30%</p>
            </Card>
            <Card className="p-6">
              <div className="mb-3 inline-block rounded bg-blue-50 px-2 py-1 text-xs font-medium text-blue-600">数据合规服务</div>
              <h3 className="mb-2 text-xl font-semibold text-gray-900">跨境电商平台数据合规体系建设</h3>
              <p className="text-sm text-gray-600 mb-4">为一家年交易额超10亿的跨境电商平台提供全面数据合规服务。完成GDPR与《个人信息保护法》双合规审查，搭建数据分级分类管理制度、用户隐私政策体系及数据跨境传输合规方案，帮助企业规避海外监管风险。</p>
              <p className="text-xs text-gray-500">成果：通过合规审查，海外业务增长45%</p>
            </Card>
            <Card className="p-6">
              <div className="mb-3 inline-block rounded bg-blue-50 px-2 py-1 text-xs font-medium text-blue-600">知识产权维权</div>
              <h3 className="mb-2 text-xl font-semibold text-gray-900">软件著作权侵权维权胜诉</h3>
              <p className="text-sm text-gray-600 mb-4">代理某制造业企业软件著作权侵权案件，被告未经授权复制使用其MES系统软件。团队通过电子固证、源代码比对、侵权损失评估等专业手段，最终法院判决被告停止侵权并赔偿经济损失120万元，有效维护了客户知识产权权益。</p>
              <p className="text-xs text-gray-500">成果：获赔120万元，侵权方停止使用</p>
            </Card>
            <Card className="p-6">
              <div className="mb-3 inline-block rounded bg-blue-50 px-2 py-1 text-xs font-medium text-blue-600">知识产权申请与布局</div>
              <h3 className="mb-2 text-xl font-semibold text-gray-900">科创企业知识产权战略布局</h3>
              <p className="text-sm text-gray-600 mb-4">为一家处于Pre-IPO阶段的生物科技企业提供知识产权整体布局规划。完成专利导航分析、核心专利布局、商标防御注册及知识产权风险排查，构建了覆盖核心技术、品牌保护、商业秘密的三层知识产权防护体系，助力企业顺利通过上市审核。</p>
              <p className="text-xs text-gray-500">成果：布局专利50+项，商标30+类，成功上市</p>
            </Card>
            <Card className="p-6">
              <div className="mb-3 inline-block rounded bg-blue-50 px-2 py-1 text-xs font-medium text-blue-600">企业知识产权顾问</div>
              <h3 className="mb-2 text-xl font-semibold text-gray-900">制造业企业常年知识产权顾问服务</h3>
              <p className="text-sm text-gray-600 mb-4">为一家大型制造企业提供常年知识产权顾问服务，涵盖知识产权风险预警、合同知识产权条款审查、员工知识产权培训、侵权监测与应对等。服务期间帮助企业发现并规避了12项重大知识产权风险，建立了完善的知识产权管理制度。</p>
              <p className="text-xs text-gray-500">成果：规避风险12项，建立完善管理制度</p>
            </Card>
          </div>
        </Container>
      </section>
=======
>>>>>>> 73f09a0092d748ebeafc9357cd25f70301605243
=======
>>>>>>> 73f09a0092d748ebeafc9357cd25f70301605243
    </>
  );
}
