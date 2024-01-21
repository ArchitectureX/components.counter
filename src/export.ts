import * as fs from 'fs'
import * as path from 'path'
import { getComponentAsString } from './index'

const componentName = 'Counter.tsx'

function exportComponent(destination: string): void {
  const componentCode = getComponentAsString()
  const filePath = path.join(destination, componentName)

  fs.writeFileSync(filePath, componentCode, 'utf8')

  console.log(`Component code written to ${filePath}`)
}

const destination = process.argv[2] || 'src/components'

exportComponent(destination)
