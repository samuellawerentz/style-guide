import React, { useState } from 'react'
import { TextField, Text, Select } from '../../index.js'
import { Row, Col, Card } from 'antd'
import { TEXT_TYPES } from './TEXT_TYPES'
import { Source } from '@storybook/addon-docs'
import dedent from 'ts-dedent'
import cssVars from '../../utils/cssVars'

const TextFinder = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [color, setColor] = useState('')

  return (
    <div>
      <Row style={{ marginBottom: 16, marginTop: 24 }}></Row>
      <Row gutter={16} align="bottom">
        <Col>
          <TextField
            style={{ width: 322 }}
            allowClear
            type="search-box"
            label="Find text component"
            placeholder="Name, font-size/weight, line height"
            onChange={({ target }) => setSearchTerm(target.value)}
          />
        </Col>
        <Col>
          <Select
            placeholder="Select color"
            noShadow
            showSearch={true}
            allowClear
            onChange={setColor}
            style={{ width: 220 }}
            options={cssVars.map((i) => ({
              value: i,
              label: (
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <div
                    style={{
                      width: 16,
                      height: 16,
                      marginRight: 16,
                      flexShrink: 0,
                      backgroundColor: `var(--${i})`,
                    }}
                  ></div>
                  <div style={{ overflow: 'hidden' }}>
                    <Text ellipsis>{i}</Text>
                  </div>
                </div>
              ),
            }))}
          />
        </Col>
      </Row>
      <Row style={{ marginTop: 24 }}>
        <Col span={24}>
          <Row className="text-grid" gutter={[16, 16]}>
            {TEXT_TYPES.filter(
              (type) =>
                ~`${type.name}|${type.fontSize}|${type.lineHeight}|${type.fontWeight}`.indexOf(
                  searchTerm.toLowerCase(),
                ),
            ).map((type) => (
              <Col key={type} span={12}>
                <Card style={{ height: '100%' }}>
                  <Row justify="space-between">
                    <div>
                      <Text type="caption">Font Size: {type.fontSize}</Text>
                    </div>
                    <div>
                      <Text type="caption">Font Weight: {type.fontWeight}</Text>
                    </div>
                    <div>
                      <Text type="caption">Line Height: {type.lineHeight}</Text>
                    </div>
                  </Row>
                  <Text type={type.name} color={color || ''}>
                    This is a {type.name}
                  </Text>
                  <Source
                    code={dedent`
                <Text type=${type.name}${color ? ` color="${color}"` : ''}>
                    This is a ${type.name}
                </Text>`.trim()}
                    language="jsx"
                  />
                </Card>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </div>
  )
}

export default TextFinder
