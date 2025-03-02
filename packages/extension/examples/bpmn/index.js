

window.onload = function () {
  const lf = new LogicFlow({
    container: document.querySelector('#app'),
    edgeTextDraggable: true,
    nodeTextDraggable: true,
    // adjustNodePosition: false,
    // stopMoveGraph: true,
    // multipleSelectedKey: 'meta', // alt, shift
    hideAnchors: false,
    plugins: [
      BpmnElement,
      MiniMap,
      FlowPath,
      AutoLayout,
      DndPanel,
      Menu,
      ContextMenu,
      Group,
      Control,
      BpmnXmlAdapter,
      Snapshot,
      SelectionSelect,
    ],
    // isSilentMode: true,
    grid: {
      type: 'dot',
      size: 20,
    },
    keyboard: {
      enabled: true,
    },
    snapline: true,
  });
  lf.setMenuConfig({
    nodeMenu: [
      {
        text: '分享',
        callback() {
          console.log('分享成功！');
        }
      },
      {
        text: '复制',
        callback() {
          console.log('分享成功！');
        }
      },
      {
        text: '修改',
        callback() {
          console.log('分享成功！');
        }
      }
    ],
    graphMenu: [
      {
        text: '分111享',
        callback() {
          console.log('分享成功22！');
        }
      },
    ]
  });
  const startConfig = {
    type: 'bpmn:startEvent',
    text: 'Start Event',
    label: 'Start Event',
    icon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAAH6ji2bAAAABGdBTUEAALGPC/xhBQAAAnBJREFUOBGdVL1rU1EcPfdGBddmaZLiEhdx1MHZQXApraCzQ7GKLgoRBxMfcRELuihWKcXFRcEWF8HBf0DdDCKYRZpnl7p0svLe9Zzbd29eQhTbC8nv+9zf130AT63jvooOGS8Vf9Nt5zxba7sXQwODfkWpkbjTQfCGUd9gIp3uuPP8bZ946g56dYQvnBg+b1HB8VIQmMFrazKcKSvFW2dQTxJnJdQ77urmXWOMBCmXM2Rke4S7UAW+/8ywwFoewmBps2tu7mbTdp8VMOkIRAkKfrVawalJTtIliclFbaOBqa0M2xImHeVIfd/nKAfVq/LGnPss5Kh00VEdSzfwnBXPUpmykNss4lUI9C1ga+8PNrBD5YeqRY2Zz8PhjooIbfJXjowvQJBqkmEkVnktWhwu2SM7SMx7Cj0N9IC0oQXRo8xwAGzQms+xrB/nNSUWVveI48ayrFGyC2+E2C+aWrZHXvOuz+CiV6iycWe1Rd1Q6+QUG07nb5SbPrL4426d+9E1axKjY3AoRrlEeSQo2Eu0T6BWAAr6COhTcWjRaYfKG5csnvytvUr/WY4rrPMB53Uo7jZRjXaG6/CFfNMaXEu75nG47X+oepU7PKJvvzGDY1YLSKHJrK7vFUwXKkaxwhCW3u+sDFMVrIju54RYYbFKpALZAo7sB6wcKyyrd+aBMryMT2gPyD6GsQoRFkGHr14TthZni9ck0z+Pnmee460mHXbRAypKNy3nuMdrWgVKj8YVV8E7PSzp1BZ9SJnJAsXdryw/h5ctboUVi4AFiCd+lQaYMw5z3LGTBKjLQOeUF35k89f58Vv/tGh+l+PE/wG0rgfIUbZK5AAAAABJRU5ErkJggg==',
  };
  const intermediateConfig = {
    type: 'bpmn:intermediateThrowEvent',
    text: 'Intermediate Event',
    label: 'Intermediate Event',
    icon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAAH6ji2bAAAABGdBTUEAALGPC/xhBQAAAnBJREFUOBGdVL1rU1EcPfdGBddmaZLiEhdx1MHZQXApraCzQ7GKLgoRBxMfcRELuihWKcXFRcEWF8HBf0DdDCKYRZpnl7p0svLe9Zzbd29eQhTbC8nv+9zf130AT63jvooOGS8Vf9Nt5zxba7sXQwODfkWpkbjTQfCGUd9gIp3uuPP8bZ946g56dYQvnBg+b1HB8VIQmMFrazKcKSvFW2dQTxJnJdQ77urmXWOMBCmXM2Rke4S7UAW+/8ywwFoewmBps2tu7mbTdp8VMOkIRAkKfrVawalJTtIliclFbaOBqa0M2xImHeVIfd/nKAfVq/LGnPss5Kh00VEdSzfwnBXPUpmykNss4lUI9C1ga+8PNrBD5YeqRY2Zz8PhjooIbfJXjowvQJBqkmEkVnktWhwu2SM7SMx7Cj0N9IC0oQXRo8xwAGzQms+xrB/nNSUWVveI48ayrFGyC2+E2C+aWrZHXvOuz+CiV6iycWe1Rd1Q6+QUG07nb5SbPrL4426d+9E1axKjY3AoRrlEeSQo2Eu0T6BWAAr6COhTcWjRaYfKG5csnvytvUr/WY4rrPMB53Uo7jZRjXaG6/CFfNMaXEu75nG47X+oepU7PKJvvzGDY1YLSKHJrK7vFUwXKkaxwhCW3u+sDFMVrIju54RYYbFKpALZAo7sB6wcKyyrd+aBMryMT2gPyD6GsQoRFkGHr14TthZni9ck0z+Pnmee460mHXbRAypKNy3nuMdrWgVKj8YVV8E7PSzp1BZ9SJnJAsXdryw/h5ctboUVi4AFiCd+lQaYMw5z3LGTBKjLQOeUF35k89f58Vv/tGh+l+PE/wG0rgfIUbZK5AAAAABJRU5ErkJggg==',
  };
  const userConfig = {
    type: 'bpmn:userTask',
    label: 'User Task',
    icon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAATCAYAAAEFVwZaAAAABGdBTUEAALGPC/xhBQAAAqlJREFUOBF9VM9rE0EUfrMJNUKLihGbpLGtaCOIR8VjQMGDePCgCCIiCNqzCAp2MyYUCXhUtF5E0D+g1t48qAd7CCLqQUQKEWkStcEfVGlLdp/fm3aW2QQdyLzf33zz5m2IsAZ9XhDpyaaIZkTS4ASzK41TFao88GuJ3hsr2pAbipHxuSYyKRugagICGANkfFnNh3HeE2N0b3nN2cgnpcictw5veJIzxmDamSlxxQZicq/mflxhbaH8BLRbuRwNtZp0JAhoplVRUdzmCe/vO27wFuuA3S5qXruGdboy5/PRGFsbFGKo/haRtQHIrM83bVeTrOgNhZReWaYGnE4aUQgTJNvijJFF4jQ8BxJE5xfKatZWmZcTQ+BVgh7s8SgPlCkcec4mGTmieTP4xd7PcpIEg1TX6gdeLW8rTVMVLVvb7ctXoH0Cydl2QOPJBG21STE5OsnbweVYzAnD3A7PVILuY0yiiyDwSm2g441r6rMSgp6iK42yqroI2QoXeJVeA+YeZSa47gZdXaZWQKTrG93rukk/l2Al6Kzh5AZEl7dDQy+JjgFahQjRopSxPbrbvK7GRe9ePWBo1wcU7sYrFZtavXALwGw/7Dnc50urrHJuTPSoO2IMV3gUQGNg87IbSOIY9BpiT9HV7FCZ94nPXb3MSnwHn/FFFE1vG6DTby+r31KAkUktB3Qf6ikUPWxW1BkXSPQeMHHiW0+HAd2GelJsZz1OJegCxqzl+CLVHa/IibuHeJ1HAKzhuDR+ymNaRFM+4jU6UWKXorRmbyqkq/D76FffevwdCp+jN3UAN/C9JRVTDuOxC/oh+EdMnqIOrlYteKSfadVRGLJFJPSB/ti/6K8f0CNymg/iH2gO/f0DwE0yjAFO6l8JaR5j0VPwPwfaYHqOqrCI319WzwhwzNW/aQAAAABJRU5ErkJggg==',
    properties: {
      actived: true,
    }
  };
  const serviceConfig = {
    type: 'bpmn:serviceTask',
    label: 'Service Task',
    icon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAATCAYAAAEFVwZaAAAABGdBTUEAALGPC/xhBQAAAqlJREFUOBF9VM9rE0EUfrMJNUKLihGbpLGtaCOIR8VjQMGDePCgCCIiCNqzCAp2MyYUCXhUtF5E0D+g1t48qAd7CCLqQUQKEWkStcEfVGlLdp/fm3aW2QQdyLzf33zz5m2IsAZ9XhDpyaaIZkTS4ASzK41TFao88GuJ3hsr2pAbipHxuSYyKRugagICGANkfFnNh3HeE2N0b3nN2cgnpcictw5veJIzxmDamSlxxQZicq/mflxhbaH8BLRbuRwNtZp0JAhoplVRUdzmCe/vO27wFuuA3S5qXruGdboy5/PRGFsbFGKo/haRtQHIrM83bVeTrOgNhZReWaYGnE4aUQgTJNvijJFF4jQ8BxJE5xfKatZWmZcTQ+BVgh7s8SgPlCkcec4mGTmieTP4xd7PcpIEg1TX6gdeLW8rTVMVLVvb7ctXoH0Cydl2QOPJBG21STE5OsnbweVYzAnD3A7PVILuY0yiiyDwSm2g441r6rMSgp6iK42yqroI2QoXeJVeA+YeZSa47gZdXaZWQKTrG93rukk/l2Al6Kzh5AZEl7dDQy+JjgFahQjRopSxPbrbvK7GRe9ePWBo1wcU7sYrFZtavXALwGw/7Dnc50urrHJuTPSoO2IMV3gUQGNg87IbSOIY9BpiT9HV7FCZ94nPXb3MSnwHn/FFFE1vG6DTby+r31KAkUktB3Qf6ikUPWxW1BkXSPQeMHHiW0+HAd2GelJsZz1OJegCxqzl+CLVHa/IibuHeJ1HAKzhuDR+ymNaRFM+4jU6UWKXorRmbyqkq/D76FffevwdCp+jN3UAN/C9JRVTDuOxC/oh+EdMnqIOrlYteKSfadVRGLJFJPSB/ti/6K8f0CNymg/iH2gO/f0DwE0yjAFO6l8JaR5j0VPwPwfaYHqOqrCI319WzwhwzNW/aQAAAABJRU5ErkJggg==',
    cls: 'import_icon'
  };
  const exclusiveGatewayConfig = {
    type: 'bpmn:exclusiveGateway',
    label: 'Gateway',
    text: 'Gateway',
    icon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAVCAYAAAHeEJUAAAAABGdBTUEAALGPC/xhBQAAAvVJREFUOBGNVEFrE0EU/mY3bQoiFlOkaUJrQUQoWMGePLX24EH0IIoHKQiCV0G8iE1covgLiqA/QTzVm1JPogc9tIJYFaQtlhQxqYjSpunu+L7JvmUTU3AgmTfvffPNN++9WSA1DO182f6xwILzD5btfAoQmwL5KJEwiQyVbSVZ0IgRyV6PTpIJ81E5ZvqfHQR0HUOBHW4L5Et2kQ6Zf7iAOhTFAA8s0pEP7AXO1uAA52SbqGk6h/6J45LaLhO64ByfcUzM39V7ZiAdS2yCePPEIQYvTUHqM/n7dgQNfBKWPjpF4ISk8q3J4nB11qw6X8l+FsF3EhlkEMfrjIer3wJTLwS2aCNcj4DbGxXTw00JmAuO+Ni6bBxVUCvS5d9aa04+so4pHW5jLTywuXAL7jJ+D06sl82Sgl2JuVBQn498zkc2bGKxULHjCnSMadBKYDYYHAtsby1EQ5lNGrQd4Y3v4Zo0XdGEmDno46yCM9Tk+RiJmUYHS/aXHPNTcjxcbTFna000PFJHIVZ5lFRqRpJWk9/+QtlOUYJj9HG5pVFEU7zqIYDVsw2s+AJaD8wTd2umgSCCyUxgGsS1Y6TBwXQQTFuZaHcd8gAGioE90hlsY+wMcs30RduYtxanjMGal8H5dMW67dmT1JFtYUEe8LiQLRsPZ6IIc7A4J5tqco3T0pnv/4u0kyzrYUq7gASuEyI8VXKvB9Odytv6jS/PNaZBln0nioJG/AVQRZvApOdhjj3Jt8QC8Im09SafwdBdvIpztpxWxpeKCC+EsFdS8DCyuCn2munFpL7ctHKp+Xc5cMybeIyMAN33SPL3ZR9QV1XVwLyzHm6Iv0/yeUuUb7PPlZC4D4HZkeu6dpF4v9j9MreGtMbxMMRLIcjJic9yHi7WQ3yVKzZVWUr5UrViJvn1FfUlwe/KYVfYyWRLSGNu16hR01U9IacajXPei0wx/5BqgInvJN+MMNtNme7ReU9SBbgntovn0kKHpFg7UogZvaZiOue/q1SBo9ktHzQAAAAASUVORK5CYII=',
  }
  const endConfig = {
    type: 'bpmn:endEvent',
    label: 'End Event',
    text: 'End Event',
    icon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAAH6ji2bAAAABGdBTUEAALGPC/xhBQAAA1BJREFUOBFtVE1IVUEYPXOf+tq40Y3vPcmFIdSjIorWoRG0ERWUgnb5FwVhYQSl72oUoZAboxKNFtWiwKRN0M+jpfSzqJAQclHo001tKkjl3emc8V69igP3znzfnO/M9zcDcKT67azmjYWTwl9Vn7Vumeqzj1DVb6cleQY4oAVnIOPb+mKAGxQmKI5CWNJ2aLPatxWa3aB9K7/fB+/Z0jUF6TmMlFLQqrkECWQzOZxYGjTlOl8eeKaIY5yHnFn486xBustDjWT6dG7pmjHOJd+33t0iitTPkK6tEvjxq4h2MozQ6WFSX/LkDUGfFwfhEZj1Auz/U4pyAi5Sznd7uKzznXeVHlI/Aywmk6j7fsUsEuCGADrWARXXwjxWQsUbIupDHJI7kF5dRktg0eN81IbiZXiTESic50iwS+t1oJgL83jAiBupLDCQqwziaWSoAFSeIR3P5Xv5az00wyIn35QRYTwdSYbz8pH8fxUUAtxnFvYmEmgI0wYXUXcCCSpeEVpXlsRhBnCEATxWylL9+EKCAYhe1NGstUa6356kS9NVvt3DU2fd+Wtbm/+lSbylJqsqkSm9CRhvoJVlvKPvF1RKY/FcPn5j4UfIMLn8D4UYb54BNsilTDXKnF4CfTobA0FpoW/LSp306wkXM+XaOJhZaFkcNM82ASNAWMrhrUbRfmyeI1FvRBTpN06WKxa9BK0o2E4Pd3zfBBEwPsv9sQBnmLVbLEIZ/Xe9LYwJu/Er17W6HYVBc7vmuk0xUQ+pqxdom5Fnp55SiytXLPYoMXNM4u4SNSCFWnrVIzKG3EGyMXo6n/BQOe+bX3FClY4PwydVhthOZ9NnS+ntiLh0fxtlUJHAuGaFoVmttpVMeum0p3WEXbcll94l1wM/gZ0Ccczop77VvN2I7TlsZCsuXf1WHvWEhjO8DPtyOVg2/mvK9QqboEth+7pD6NUQC1HN/TwvydGBARi9MZSzLE4b8Ru3XhX2PBxf8E1er2A6516o0w4sIA+lwURhAON82Kwe2iDAC1Watq4XHaGQ7skLcFOtI5lDxuM2gZe6WFIotPAhbaeYlU4to5cuarF1QrcZ/lwrLaCJl66JBocYZnrNlvm2+MBCTmUymPrYZVbjdlr/BxlMjmNmNI3SAAAAAElFTkSuQmCC',
  };
  const groupConfig = {
    type: 'group',
    label: 'Group',
    icon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAAH6ji2bAAAABGdBTUEAALGPC/xhBQAAA1BJREFUOBFtVE1IVUEYPXOf+tq40Y3vPcmFIdSjIorWoRG0ERWUgnb5FwVhYQSl72oUoZAboxKNFtWiwKRN0M+jpfSzqJAQclHo001tKkjl3emc8V69igP3znzfnO/M9zcDcKT67azmjYWTwl9Vn7Vumeqzj1DVb6cleQY4oAVnIOPb+mKAGxQmKI5CWNJ2aLPatxWa3aB9K7/fB+/Z0jUF6TmMlFLQqrkECWQzOZxYGjTlOl8eeKaIY5yHnFn486xBustDjWT6dG7pmjHOJd+33t0iitTPkK6tEvjxq4h2MozQ6WFSX/LkDUGfFwfhEZj1Auz/U4pyAi5Sznd7uKzznXeVHlI/Aywmk6j7fsUsEuCGADrWARXXwjxWQsUbIupDHJI7kF5dRktg0eN81IbiZXiTESic50iwS+t1oJgL83jAiBupLDCQqwziaWSoAFSeIR3P5Xv5az00wyIn35QRYTwdSYbz8pH8fxUUAtxnFvYmEmgI0wYXUXcCCSpeEVpXlsRhBnCEATxWylL9+EKCAYhe1NGstUa6356kS9NVvt3DU2fd+Wtbm/+lSbylJqsqkSm9CRhvoJVlvKPvF1RKY/FcPn5j4UfIMLn8D4UYb54BNsilTDXKnF4CfTobA0FpoW/LSp306wkXM+XaOJhZaFkcNM82ASNAWMrhrUbRfmyeI1FvRBTpN06WKxa9BK0o2E4Pd3zfBBEwPsv9sQBnmLVbLEIZ/Xe9LYwJu/Er17W6HYVBc7vmuk0xUQ+pqxdom5Fnp55SiytXLPYoMXNM4u4SNSCFWnrVIzKG3EGyMXo6n/BQOe+bX3FClY4PwydVhthOZ9NnS+ntiLh0fxtlUJHAuGaFoVmttpVMeum0p3WEXbcll94l1wM/gZ0Ccczop77VvN2I7TlsZCsuXf1WHvWEhjO8DPtyOVg2/mvK9QqboEth+7pD6NUQC1HN/TwvydGBARi9MZSzLE4b8Ru3XhX2PBxf8E1er2A6516o0w4sIA+lwURhAON82Kwe2iDAC1Watq4XHaGQ7skLcFOtI5lDxuM2gZe6WFIotPAhbaeYlU4to5cuarF1QrcZ/lwrLaCJl66JBocYZnrNlvm2+MBCTmUymPrYZVbjdlr/BxlMjmNmNI3SAAAAAElFTkSuQmCC',
  };
  const selectionConfig = {
    label: 'Selection',
    icon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAAH6ji2bAAAABGdBTUEAALGPC/xhBQAAAOVJREFUOBGtVMENwzAIjKP++2026ETdpv10iy7WFbqFyyW6GBywLCv5gI+Dw2Bluj1znuSjhb99Gkn6QILDY2imo60p8nsnc9bEo3+QJ+AKHfMdZHnl78wyTnyHZD53Zzx73MRSgYvnqgCUHj6gwdck7Zsp1VOrz0Uz8NbKunzAW+Gu4fYW28bUYutYlzSa7B84Fh7d1kjLwhcSdYAYrdkMQVpsBr5XgDGuXwQfQr0y9zwLda+DUYXLaGKdd2ZTtvbolaO87pdo24hP7ov16N0zArH1ur3iwJpXxm+v7oAJNR4JEP8DoAuSFEkYH7cAAAAASUVORK5CYII=',
    callback: () => {
      lf.extension.selectionSelect.openSelectionSelect();
      lf.once('selection:selected', () => {
        lf.extension.selectionSelect.closeSelectionSelect();
      });
    }
  };
  const taskConfig = {
    type: 'bpmn:task',
    text: 'Task',
    label: 'Task',
    icon: 'data:image/svg+xml;base64,PHN2ZyBzdHJva2U9ImN1cnJlbnRDb2xvciIgZmlsbD0iIzE4N0RGRiIgc3Ryb2tlLXdpZHRoPSIwIiB2aWV3Qm94PSIwIDAgMjQgMjQiIGhlaWdodD0iMjUiIHdpZHRoPSIyNSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDI0djI0SDB6Ij48L3BhdGg+PHBhdGggZD0iTTIgNHYxNmgyMFY0SDJ6bTE4IDE0SDRWNmgxNnYxMnoiPjwvcGF0aD48L3N2Zz4=',
  };
  const emailConfig = {
    type: 'bpmn:messageEventDefinition',
    text: 'Email Step',
    label: 'Email Step',
    icon: 'data:image/svg+xml;base64,PHN2ZyBzdHJva2U9ImN1cnJlbnRDb2xvciIgZmlsbD0iIzE4N0RGRiIgc3Ryb2tlLXdpZHRoPSIwIiB2aWV3Qm94PSIwIDAgMTAyNCAxMDI0IiBoZWlnaHQ9IjI1IiB3aWR0aD0iMjUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTkyOCAxNjBIOTZjLTE3LjcgMC0zMiAxNC4zLTMyIDMydjY0MGMwIDE3LjcgMTQuMyAzMiAzMiAzMmg4MzJjMTcuNyAwIDMyLTE0LjMgMzItMzJWMTkyYzAtMTcuNy0xNC4zLTMyLTMyLTMyem0tNDAgMTEwLjhWNzkySDEzNlYyNzAuOGwtMjcuNi0yMS41IDM5LjMtNTAuNSA0Mi44IDMzLjNoNjQzLjFsNDIuOC0zMy4zIDM5LjMgNTAuNS0yNy43IDIxLjV6TTgzMy42IDIzMkw1MTIgNDgyIDE5MC40IDIzMmwtNDIuOC0zMy4zLTM5LjMgNTAuNSAyNy42IDIxLjUgMzQxLjYgMjY1LjZhNTUuOTkgNTUuOTkgMCAwIDAgNjguNyAwTDg4OCAyNzAuOGwyNy42LTIxLjUtMzkuMy01MC41LTQyLjcgMzMuMnoiPjwvcGF0aD48L3N2Zz4=',
  };
  const timerConfig = {
    type: 'bpmn:timerEventDefinition',
    text: 'Time Step',
    label: 'Time Step',
    icon: 'data:image/svg+xml;base64,PHN2ZyBzdHJva2U9ImN1cnJlbnRDb2xvciIgZmlsbD0iIzE4N0RGRiIgc3Ryb2tlLXdpZHRoPSIwIiB2aWV3Qm94PSIwIDAgMTAyNCAxMDI0IiBoZWlnaHQ9IjI1IiB3aWR0aD0iMjUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTUxMiA2NEMyNjQuNiA2NCA2NCAyNjQuNiA2NCA1MTJzMjAwLjYgNDQ4IDQ0OCA0NDggNDQ4LTIwMC42IDQ0OC00NDhTNzU5LjQgNjQgNTEyIDY0em0wIDgyMGMtMjA1LjQgMC0zNzItMTY2LjYtMzcyLTM3MnMxNjYuNi0zNzIgMzcyLTM3MiAzNzIgMTY2LjYgMzcyIDM3Mi0xNjYuNiAzNzItMzcyIDM3MnoiPjwvcGF0aD48cGF0aCBkPSJNNjg2LjcgNjM4LjZMNTQ0LjEgNTM1LjVWMjg4YzAtNC40LTMuNi04LTgtOEg0ODhjLTQuNCAwLTggMy42LTggOHYyNzUuNGMwIDIuNiAxLjIgNSAzLjMgNi41bDE2NS40IDEyMC42YzMuNiAyLjYgOC42IDEuOCAxMS4yLTEuN2wyOC42LTM5YzIuNi0zLjcgMS44LTguNy0xLjgtMTEuMnoiPjwvcGF0aD48L3N2Zz4=',
  };
  const uiConfig = {
    type: 'bpmn:scriptTask',
    text: 'User Interface Step',
    label: 'User Interface Step',
    icon: 'data:image/svg+xml;base64,PHN2ZyBzdHJva2U9ImN1cnJlbnRDb2xvciIgZmlsbD0iIzE4N0RGRiIgc3Ryb2tlLXdpZHRoPSIwIiB2aWV3Qm94PSIwIDAgMTYgMTYiIGhlaWdodD0iMjUiIHdpZHRoPSIyNSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTUgNi41bC0uNDctLjVIN1YxLjQ3TDYuNTMgMUgxLjQ3TDEgMS40N3Y4LjA2bC40Ny40N0g0djQuNTNsLjQ3LjQ3aDEwLjA2bC40Ny0uNDdWNi41ek0yIDlWM2g0djZIMnptMTIgNUg1di00aDEuNTNMNyA5LjUzVjguMDEzaDdWMTR6Ij48L3BhdGg+PC9zdmc+',
  };
  const systemConfig = {
    type: 'bpmn:serviceTask',
    text: 'System Step',
    label: 'System Step',
    icon: 'data:image/svg+xml;base64,PHN2ZyBzdHJva2U9IiMxODdERkYiIGZpbGw9IiMxODdERkYiIHN0cm9rZS13aWR0aD0iMCIgdmlld0JveD0iMCAwIDUxMiA1MTIiIGhlaWdodD0iMjUiIHdpZHRoPSIyNSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBmaWxsPSJub25lIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMzIiIGQ9Ik0yNjIuMjkgMTkyLjMxYTY0IDY0IDAgMTA1Ny40IDU3LjQgNjQuMTMgNjQuMTMgMCAwMC01Ny40LTU3LjR6TTQxNi4zOSAyNTZhMTU0LjM0IDE1NC4zNCAwIDAxLTEuNTMgMjAuNzlsNDUuMjEgMzUuNDZhMTAuODEgMTAuODEgMCAwMTIuNDUgMTMuNzVsLTQyLjc3IDc0YTEwLjgxIDEwLjgxIDAgMDEtMTMuMTQgNC41OWwtNDQuOS0xOC4wOGExNi4xMSAxNi4xMSAwIDAwLTE1LjE3IDEuNzVBMTY0LjQ4IDE2NC40OCAwIDAxMzI1IDQwMC44YTE1Ljk0IDE1Ljk0IDAgMDAtOC44MiAxMi4xNGwtNi43MyA0Ny44OWExMS4wOCAxMS4wOCAwIDAxLTEwLjY4IDkuMTdoLTg1LjU0YTExLjExIDExLjExIDAgMDEtMTAuNjktOC44N2wtNi43Mi00Ny44MmExNi4wNyAxNi4wNyAwIDAwLTktMTIuMjIgMTU1LjMgMTU1LjMgMCAwMS0yMS40Ni0xMi41NyAxNiAxNiAwIDAwLTE1LjExLTEuNzFsLTQ0Ljg5IDE4LjA3YTEwLjgxIDEwLjgxIDAgMDEtMTMuMTQtNC41OGwtNDIuNzctNzRhMTAuOCAxMC44IDAgMDEyLjQ1LTEzLjc1bDM4LjIxLTMwYTE2LjA1IDE2LjA1IDAgMDA2LTE0LjA4Yy0uMzYtNC4xNy0uNTgtOC4zMy0uNTgtMTIuNXMuMjEtOC4yNy41OC0xMi4zNWExNiAxNiAwIDAwLTYuMDctMTMuOTRsLTM4LjE5LTMwQTEwLjgxIDEwLjgxIDAgMDE0OS40OCAxODZsNDIuNzctNzRhMTAuODEgMTAuODEgMCAwMTEzLjE0LTQuNTlsNDQuOSAxOC4wOGExNi4xMSAxNi4xMSAwIDAwMTUuMTctMS43NUExNjQuNDggMTY0LjQ4IDAgMDExODcgMTExLjJhMTUuOTQgMTUuOTQgMCAwMDguODItMTIuMTRsNi43My00Ny44OUExMS4wOCAxMS4wOCAwIDAxMjEzLjIzIDQyaDg1LjU0YTExLjExIDExLjExIDAgMDExMC42OSA4Ljg3bDYuNzIgNDcuODJhMTYuMDcgMTYuMDcgMCAwMDkgMTIuMjIgMTU1LjMgMTU1LjMgMCAwMTIxLjQ2IDEyLjU3IDE2IDE2IDAgMDAxNS4xMSAxLjcxbDQ0Ljg5LTE4LjA3YTEwLjgxIDEwLjgxIDAgMDExMy4xNCA0LjU4bDQyLjc3IDc0YTEwLjggMTAuOCAwIDAxLTIuNDUgMTMuNzVsLTM4LjIxIDMwYTE2LjA1IDE2LjA1IDAgMDAtNi4wNSAxNC4wOGMuMzMgNC4xNC41NSA4LjMuNTUgMTIuNDd6Ij48L3BhdGg+PC9zdmc+',
  };

  lf.extension.dndPanel.setPatternItems([
    selectionConfig,
    startConfig,
    intermediateConfig,
    endConfig,
    taskConfig,
    exclusiveGatewayConfig,
    emailConfig,
    timerConfig,
    uiConfig,
    systemConfig,
    // userConfig,
    // serviceConfig,
    // groupConfig,
  ]);
  lf.extension.control.addItem({
    iconClass: 'custom-minimap',
    title: '',
    text: 'navigation',
    onMouseEnter: (lf, ev) => {
      const position = lf.getPointByClient(ev.x, ev.y);
      lf.extension.miniMap.show(position.domOverlayPosition.x - 120, position.domOverlayPosition.y + 35);
    },
    onClick: (lf, ev) => {
      // console.log(MiniMap, ev);
      const position = lf.getPointByClient(ev.x, ev.y);
      // console.log(position);
      lf.extension.miniMap.show(position.domOverlayPosition.x - 120, position.domOverlayPosition.y + 35);
    },
  });
  // lf.setContextMenuItems
  lf.setContextMenuByType('bpmn:userTask', [
    userConfig,
    serviceConfig,
    exclusiveGatewayConfig,
    endConfig,
    groupConfig,
  ]);
  const commonMenuConfig = {
    icon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IArs4c6QAAAVhJREFUOE/VlLFKA0EQhmewEazshVjGJlgKWkSLNAGdveMqEayt4hMY9AXyCIKVhuy/TSwCFnZ2Jp1vIRaWZmTCBc6LF86ooNvcz+38383tzw7TnCUi68xcyZao6ksIYVhk46KNFPZIRKNcjX2k473vfOadB6wzcxtAPWsUEWHmVv79tIadc4GIDub9etk9Zj4t7LAsJF/3ARhFUcsKis4nbxaRTWY+BjDx2coD2ylw8ozjuNrr9Z5Mm3mabhRFW977BxGZOedCoHMuIaITALvOuT0i6gCoxXFcU9Vb7/3aIsAbABacAe9MG3A8Ho9MLwI8BCC/BTwHsJN2aJ1Xv9vh/wL+nVCuACz/WMqqehRC2Degql6EELbTlK8BbHwpZbtuSZIsdbvdN9ONRmNlMBi8mm42m6v9fv+5LLCiqpdlpo2q2nBw2dk4c5dV9SyF3ZeBEtEwO23eAUh+SIoWcATkAAAAAElFTkSuQmCC',
    callback: (data) => {
      lf.deleteElement(data.id);
      lf.hideContextMenu();
    }
  };
  lf.setContextMenuItems(commonMenuConfig);
  // lf.setContextMenuByType('bpmn:serviceTask', [
  //   userConfig,
  //   serviceConfig,
  //   exclusiveGatewayConfig,
  //   endConfig,
  //   groupConfig,
  // ]);
  let lfData = window.sessionStorage.getItem('lf-data');
  if (lfData) {
    renderXml(lfData);
  } else {
    lfData = window.sessionStorage.getItem('lf-json-data');
    if (!lfData) {
      lfData = {};
    } else {
      lfData = JSON.parse(lfData);
    }
    lf.render(lfData);
  }
  const pathes = window.sessionStorage.getItem('lf-pathes');
  if (pathes) {
    lf.setRawPathes(JSON.parse(pathes));
  }

  document.querySelector('#download').addEventListener('click', () => {
    const data = lf.getGraphData();
    console.log(data);
    this.download('logic-flow.xml', data);
    window.sessionStorage.setItem('lf-data', data);
  });
  document.querySelector('#download-img').addEventListener('click', () => {
    lf.getSnapshot();
  });
  document.querySelector('#upload').addEventListener('change', function (ev) {
    const file = ev.target.files[0];
    const reader = new FileReader()
    reader.onload = (event) => {
      const xml = event.target.result;
      
      renderXml(xml);
    }
    reader.onerror = error => reject(error)
    reader.readAsText(file) // you could also read images and other binaries
  });

  document.querySelector('#js_get_path').addEventListener('click', () => {
    lf.setStartNodeType('bpmn:startEvent');
    const pathes = lf.getPathes();
    console.log(pathes);
    console.log(JSON.parse(window.sessionStorage.getItem('lf-pathes')));
    window.sessionStorage.setItem('lf-pathes', JSON.stringify(pathes));
  });
  document.querySelector('#js_show_path').addEventListener('click', () => {
    console.log(lf.getRawPathes());
  });
  document.querySelector('#js_auto_layout').addEventListener('click', () => {
    const data1 = lf.layout('bpmn:startEvent');
    console.log(data1);
  });
  document.querySelector('#js_get_data').addEventListener('click', () => {
    // const data = lf.getGraphRawData();
    const data = lf.getSelectElements(true);
    console.log(data);
  })
  document.querySelector('#js_show_menu').addEventListener('click', () => {
    const { nodes } = lf.getSelectElements();
    console.log(nodes[0]);
    lf.showContextMenu(nodes[0]);
  })
  document.querySelector('#js_resize').addEventListener('click', () => {
    lf.resize(1200, 400)
  })

  function renderXml(xml) {
    lf.render(xml);
  }
}

function download(filename, text) {
  var element = document.createElement('a');
  element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
  element.setAttribute('download', filename);

  element.style.display = 'none';
  document.body.appendChild(element);

  element.click();

  document.body.removeChild(element);
}
