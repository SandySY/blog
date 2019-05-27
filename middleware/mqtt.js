/*import mqtt from "@/assets/module/mqtt";
import {MessageBox} from "mint-ui";*/
export default function ({store, redirect, router}) {
    //判断用户token是否存在和用户信息是否存在
    /*if (!!store.getters.token && store.getters.userInfo) {
        //MQTT消息回调
        const callback = message => {
            let topic = message.destinationName;
            let messages = JSON.parse(message.payloadString);
            console.log("mqtt topic: " + topic);
            console.log("mqtt messages: " + messages);
            console.log("mqtt messages: " + message.payloadString);
            let userData = store.getters.userInfo;
            if (userData) {
                let localMessage =
                    JSON.parse(
                        localStorage.getItem("localMessage" + userData.phone) ||
                            "[]"
                    ) || [];
                localMessage.push(messages);
                for (let i = 0; i < localMessage.length; i++) {
                    if (!isNaN(localMessage[i].time)) {
                        localMessage[i].time = common.Functions.normaltime(
                            localMessage[i].time / 1000
                        );
                    }
                }
                localStorage.setItem(
                    "localMessage" + userData.phone,
                    JSON.stringify(localMessage)
                );
                store.dispatch("message/index/saveMessage", messages);
                if (
                    messages.content.module === "DIAGNOSE" &&
                    messages.type === 2
                ) {
                    store.dispatch("message/faultMsg/saveMessage", messages);
                    console.log("故障消息来了");
                }
                if (
                    topic === "GOODS_WILL_ON_SHELF" &&
                    messages.type === 3 &&
                    messages.content.subject === "GOODS_WILL_ON_SHELF"
                ) {
                    console.log("商品抢购消息来了");
                    //获取提醒
                    common.ajax(
                        common.URL.LOCALURL +
                            "sanyapi/sany/v1/goods/get-snap-up-goods-notice?id=" +
                            messages.content.subjectId,
                        {
                            type: "get",
                            loading: false,
                            success: function (data) {
                                if (data) {
                                    MessageBox({
                                        message: messages.content.message,
                                        confirmButtonText: "我知道了",
                                        title: messages.content.title,
                                        closeOnClickModal: false
                                    });
                                }
                            }
                        }
                    );
                }
            }
        };
        //获取用户信息
        let user = store.getters.userInfo;
        //初始化topic列表
        let topics = ["a", user.phone.toString()];
        user.province &&
            topics.push("a/" + user.province, user.province.toString());
        user.city && topics.push("a/" + user.city, user.city.toString());
        //是否驾驶员
        if (user.isDriver) {
            topics.push("d");
            user.province && topics.push("d/" + user.province);
            user.city && topics.push("d/" + user.city);
        }
        //是否工程师
        if (user.isEngineer) {
            topics.push("e");
            user.province && topics.push("e/" + user.province);
            user.city && topics.push("e/" + user.city);
        }
        //是否加盟商
        if (user.isFranchisee) {
            topics.push("f");
            user.province && topics.push("f/" + user.province);
            user.city && topics.push("f/" + user.city);
        }
        //是否质检员
        if (user.operatorShadow) {
            topics.push("i");
            user.province && topics.push("i/" + user.province);
            user.city && topics.push("i/" + user.city);
        }
        //补充商品抢购
        topics.push("GOODS_WILL_ON_SHELF");
        if (!window.mqttclient) {
            if (window.WebSocket) {
                let oldTopics = store.getters.topics;
                let currentTopics = topics;
                //进行比较 返回新的topic里面不存在的topic
                let result =
                    oldTopics &&
                    oldTopics.filter(item => {
                        return !currentTopics.includes(item);
                });
                if (result && result.length === 0) {
                    console.log("topic没有什么不同");
                }
                //取消订阅
                const mqttSuccess = () => {
                    if (result) {
                        for (let item of result) {
                            try {
                                window.mqttclient.unsubscribe(item);
                            } catch (e) {
                                console.log(`取消订阅${item}失败`);
                            }
                        }
                    }
                };
                window.mqttclient = mqtt.newClient(
                    user.phone,
                    topics,
                    callback,
                    false,
                    mqttSuccess
                );
                //连接MQTT
                mqtt.connect(window.mqttclient);
                common.ajax(
                    common.URL.LOCALURL +
                        "sanyapi/sany/v1/sys/addOrUpdateTopicSetting",
                    {
                        type: "post",
                        data: {
                            topicString: topics.join(",")
                        }
                    }
                );
            } else {
                console.log("客户端不支持MQTT");
            }
        }
    } else {
        if (!!window.mqttclient) {
            if (window.WebSocket) {
                try {
                    window.mqttclient.unsubscribe("#");
                    window.mqttclient.disconnect();
                } catch (e) {
                }
                window.mqttclient = null;
            }
        }
    }*/
}
