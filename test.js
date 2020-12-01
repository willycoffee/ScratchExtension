class TestBlock {
    getInfo() {
        return {
            "id": "TestBlock",
            "name": "TestBlock",
            "blocks": [{
                    "opcode": "split",
                    "blockType": "reporter",
                    "text": "split [string] at each [seperator]",
                    "arguments": {
                        "string": {
                            "type": "string",
                            "defaultValue": "hello world"
                        },
                        "seperator": {
                            "type": "string",
                            "defaultValue": " "
                        }
                    }
                },
            }],
        "menus": {}
    };
    split({string, seperator}) {
        return string.split(seperator)
    };
}
