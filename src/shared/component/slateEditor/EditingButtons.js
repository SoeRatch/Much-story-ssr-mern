import React from 'react';
import styled from 'styled-components'

const hasBlock =(value,type)=>{
  return value.blocks.some(node => node.type === type)
}

const onClickBlock = (event,editor,type) => {
    event.preventDefault()
    const { value } = editor
    const { document } = value
    const DEFAULT_NODE = 'paragraph';
    if (type !== 'bulleted-list' && type !== 'numbered-list') {
        const isActive = hasBlock(value,type)
        const isList = hasBlock(value,'list-item')

            if (isList) {
                editor
                  .setBlocks(isActive ? DEFAULT_NODE : type)
                  .unwrapBlock('bulleted-list')
                  .unwrapBlock('numbered-list')
              } 
            else {
                editor.setBlocks(isActive ? DEFAULT_NODE : type)
              }
    } 

    else {
              const isList = hasBlock(value,'list-item')
              const isType = value.blocks.some(block => {
                return !!document.getClosest(block.key, parent => parent.type === type)
              })

              if (isList && isType) {
                editor
                  .setBlocks(DEFAULT_NODE)
                  .unwrapBlock('bulleted-list')
                  .unwrapBlock('numbered-list')
              }
              else if (isList) {
                editor
                  .unwrapBlock(
                    type === 'bulleted-list' ? 'numbered-list' : 'bulleted-list'
                  )
                  .wrapBlock(type)
              } 
              else {
                    editor.setBlocks('list-item').wrapBlock(type)
                  }
         }
   
  }


export const BlockButton = ({ editor, type, icon,fontsize }) => {
  const { value } = editor
  let isActive = value.blocks.some(node => node.type === type)

if (['numbered-list', 'bulleted-list'].includes(type)) {
      const {document, blocks} = value
      if (blocks.size > 0) {
        const parent = document.getParent(blocks.first().key)
        isActive = hasBlock(value,'list-item') && parent && (parent.type === type)
      }
  }
  return (
    <div
        onMouseDown={event=>onClickBlock(event,editor,type)}
        style={{
                padding:'0 10px',
                cursor:'pointer',
                fontSize:`${fontsize}`,
                backgroundColor:`${isActive?'#e4e4e4':'#fdfaf5'}`
            }}>
                  {typeof icon.component === "string" ? (
                          <span>{icon.component}</span>
                        ) : (
                          <icon.component />
                    )}
    </div>
  )
};

