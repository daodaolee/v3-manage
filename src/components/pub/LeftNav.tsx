
import { defineComponent, onMounted, reactive } from 'vue';
import { ILeftNavResp, ILeftNavData } from "@/types";
import { getLeftNav } from "@/api"
import { message, Menu, Layout } from 'ant-design-vue';
import { Icon } from '@/utils/Icon';

const { Item, SubMenu } = Menu;
const { Sider } = Layout;

export default defineComponent({
  components: {
    Icon
  },
  setup() {
    const navData: any = reactive({
      collapsed: false,
      selectedKeys: ['1'],
      menu: [{
        key: "1",
        name: "Dashboard",
        path: "/dashboard",
        icon: "DashboardOutlined"
      }, {
        key: "2",
        name: "列表",
        path: "/list",
        icon: 'TableOutlined',
        children: [
          {
            key: "2-1",
            name: "表格示例1",
            path: "/tabledemo1"
          },
          {
            key: "2-2",
            name: "表格示例2",
            path: "/tabledemo2"
          }
        ]
      }, {
        key: "3",
        name: "个人中心",
        path: "/accountcenter",
        icon: 'UserOutlined'
      }]
    })
    // onMounted(() => {
    //   getMenu()
    // })
    // 获取左侧菜单
    const getMenu = async () => {
      const result: ILeftNavResp = await getLeftNav()
      if (result.code === 200) {
        navData.menu = result.data
      } else {
        message.error("请求失败")
      }
    }
    const renderItem = (menu: ILeftNavData) => {
      if (!menu.hidden) {
        return menu.children ? renderSubMenu(menu) : renderMenuItem(menu);
      }
      return null
    }
    const renderSubMenu = (menu: ILeftNavData) => {
      const arr: Array<JSX.Element> = [];
      if (menu.children) {
        menu.children.forEach((item: any) => {
          const renderItemTemp = renderItem(item)
          console.log(renderItemTemp)
          if (renderItemTemp) {
            arr.push(renderItemTemp)
          }
        });
      }
      const title = <span>{renderIcon(menu.icon)} <span>{menu.name}</span> </span>
      return (
        <SubMenu {...{ key: menu.key }} title={title}>
          {arr}
        </SubMenu>
      )
    }
    const renderMenuItem = (menu: ILeftNavData) => {
      return (
        <Item {...{ key: menu.key }} >
          {renderIcon(menu.icon)}
          <span>{menu.name}</span>
        </Item>
      )
    }
    const renderIcon = (icon: string) => {
      if (icon === "none" || icon === undefined) {
        return null;
      }
      return <Icon {...{ icon: icon }} />
    }
    
    const menuTree = navData.menu.map((item: ILeftNavData) => {
      if (item.hidden) {
        return null;
      }
      return renderItem(item)
    })

    return () => (
      <Sider v-model:collapsed="navData.collapsed" collapsible>
        <div class="logo">{!navData.collapsed ? 'DaoDaoLee' : 'D'}</div>
        <Menu v-model:selectedKeys="navData.selectedKeys" theme="dark" mode="inline" >
          {menuTree}
        </Menu>
      </Sider>
    )
  }
})


//   < style lang = "scss" >
//     .logo {
//   height: 50px;
//   color: white;
//   text - align: center;
//   line - height: 50px;
//   font - size: 25px;
//   color: $color - font - milk;
//   font - weight: bold;
// }

//     .site - layout.site - layout - background {
//   background: #fff;
// }
// [data - theme="dark"].site - layout.site - layout - background {
//   background: #141414;
// }
//   </ >
