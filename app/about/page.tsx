import { Container } from "@/components/ui/container";
import { Card } from "@/components/ui/card";
import { constructMetadata } from "@/lib/seo";

export const metadata = constructMetadata({
  title: "关于我们",
<<<<<<< HEAD
  description: "了解聚星数据知识产权有限公司的专业团队、发展历程和核心优势",
});

const team = [
  { name: "钟元", role: "创始人 & 技术负责人", description: "资深全栈工程师，精通Python及AI应用开发，深耕企业数字化与知识产权信息化多年，主导搭建企业级知识产权管理系统" },
  { name: "张教授", role: "法务负责人", description: "资深知识产权法专家，多年知识产权诉讼与合规实务经验" },
  { name: "李博士", role: "专利代理人", description: "资深专利代理专家，精通国内外专利申请与布局" },
  { name: "王律师", role: "合规专家", description: "数据合规领域资深顾问，专注数据跨境合规与隐私保护" },
];

const advantages = [
  { title: "技术+法律双专业团队", description: "兼具技术开发与法律专业背景，提供全方位解决方案" },
  { title: "数据知识产权全流程服务", description: "从确权、申请到维权，提供一站式服务" },
  { title: "企业级数字化管理系统支撑", description: "自主研发管理系统，服务高效可追溯" },
  { title: "丰富跨境与数据合规经验", description: "服务覆盖多个行业，跨境合规能力强" },
=======
  description: "了解我们的公司、团队和发展历程",
});

const team = [
  { name: "张三", role: "CEO", description: "10年行业经验" },
  { name: "李四", role: "CTO", description: "技术专家" },
  { name: "王五", role: "产品总监", description: "产品设计专家" },
  { name: "赵六", role: "运营总监", description: "市场营销专家" },
>>>>>>> 73f09a0092d748ebeafc9357cd25f70301605243
];

export default function AboutPage() {
  return (
    <>
      <section className="bg-gray-50 py-20">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-4xl font-bold text-gray-900 md:text-5xl">
              关于我们
            </h1>
            <p className="text-lg text-gray-600">
<<<<<<< HEAD
              专注数据知识产权服务领域，让企业数据资产合法、安全、可增值
=======
              我们是一家专注于为企业提供专业解决方案的公司，致力于通过技术创新帮助客户实现业务目标
>>>>>>> 73f09a0092d748ebeafc9357cd25f70301605243
            </p>
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <div className="mb-16">
            <h2 className="mb-4 text-3xl font-bold text-gray-900">公司介绍</h2>
            <div className="space-y-4 text-gray-600">
              <p>
<<<<<<< HEAD
                聚星数据知识产权有限公司，专注于数据知识产权服务领域，依托专业法律与技术团队，为企业提供从数据资产确权、知识产权申请、合规审查到维权诉讼的全链条服务。
              </p>
              <p>
                公司深耕知识产权与数据合规多年，服务覆盖科创企业、制造业、跨境电商等多个领域，致力于让企业数据资产合法、安全、可增值。
=======
                成立于2020年，我们始终坚持以客户为中心，提供高质量的产品和服务。
              </p>
              <p>
                我们的团队由经验丰富的专业人士组成，在各自领域都有深厚的积累。
                通过不断创新和优化，我们帮助众多企业实现了数字化转型。
>>>>>>> 73f09a0092d748ebeafc9357cd25f70301605243
              </p>
            </div>
          </div>

<<<<<<< HEAD
          <div className="mb-16">
            <h2 className="mb-8 text-3xl font-bold text-gray-900">核心优势</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {advantages.map((item) => (
                <Card key={item.title} className="text-center p-6">
                  <h3 className="mb-2 text-xl font-semibold text-gray-900">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </Card>
              ))}
            </div>
          </div>

=======
>>>>>>> 73f09a0092d748ebeafc9357cd25f70301605243
          <div>
            <h2 className="mb-8 text-3xl font-bold text-gray-900">核心团队</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {team.map((member) => (
<<<<<<< HEAD
                <Card key={member.name} className="text-center p-6">
=======
                <Card key={member.name} className="text-center">
>>>>>>> 73f09a0092d748ebeafc9357cd25f70301605243
                  <div className="mb-4 flex h-24 w-24 mx-auto items-center justify-center rounded-full bg-blue-100 text-2xl font-bold text-blue-600">
                    {member.name[0]}
                  </div>
                  <h3 className="mb-1 text-xl font-semibold text-gray-900">
                    {member.name}
                  </h3>
                  <p className="mb-2 text-sm font-medium text-blue-600">
                    {member.role}
                  </p>
                  <p className="text-sm text-gray-600">{member.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
