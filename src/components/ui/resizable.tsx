// // 'use client'

// // import * as React from 'react'
// // import { GripVerticalIcon } from 'lucide-react'
// // import {
// //   PanelGroup,
// //   Panel,
// //   PanelResizeHandle,
// // } from 'react-resizable-panels'

// // import { cn } from '@/lib/utils'

// // function ResizablePanelGroup({
// //   className,
// //   ...props
// // }: React.ComponentProps<typeof PanelGroup>) {
// //   return (
// //     <PanelGroup
// //       data-slot="resizable-panel-group"
// //       className={cn(
// //         'flex h-full w-full data-[panel-group-direction=vertical]:flex-col',
// //         className,
// //       )}
// //       {...props}
// //     />
// //   )
// // }

// // function ResizablePanel({
// //   ...props
// // }: React.ComponentProps<typeof Panel>) {
// //   return <Panel data-slot="resizable-panel" {...props} />
// // }

// // function ResizableHandle({
// //   withHandle,
// //   className,
// //   ...props
// // }: React.ComponentProps<typeof PanelResizeHandle> & {
// //   withHandle?: boolean
// // }) {
// //   return (
// //     <PanelResizeHandle
// //       data-slot="resizable-handle"
// //       className={cn(
// //         'relative flex w-px items-center justify-center bg-border after:absolute after:inset-y-0 after:left-1/2 after:w-1 after:-translate-x-1/2 focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-offset-1 focus-visible:ring-ring data-[panel-group-direction=vertical]:h-px data-[panel-group-direction=vertical]:w-full data-[panel-group-direction=vertical]:after:left-0 data-[panel-group-direction=vertical]:after:h-1 data-[panel-group-direction=vertical]:after:w-full data-[panel-group-direction=vertical]:after:translate-x-0 data-[panel-group-direction=vertical]:after:-translate-y-1/2 [&[data-panel-group-direction=vertical]>div]:rotate-90',
// //         className,
// //       )}
// //       {...props}
// //     >
// //       {withHandle && (
// //         <div className="z-10 flex h-4 w-3 items-center justify-center rounded-sm border border-border bg-background">
// //           <GripVerticalIcon className="h-2.5 w-2.5" />
// //         </div>
// //       )}
// //     </PanelResizeHandle>
// //   )
// // }

// // export { ResizablePanelGroup, ResizablePanel, ResizableHandle }
// 'use client'

// import * as React from 'react'
// import { GripVerticalIcon } from 'lucide-react'
// import { PanelGroup, Panel } from 'react-resizable-panels'
// import * as RRP from 'react-resizable-panels'

// import { cn } from '@/lib/utils'

// // Pick whichever handle exists in the installed version
// const RawResizeHandle: any =
//   (RRP as any).PanelResizeHandle ?? (RRP as any).ResizeHandle

// function ResizablePanelGroup({
//   className,
//   ...props
// }: React.ComponentProps<typeof PanelGroup>) {
//   return (
//     <PanelGroup
//       data-slot="resizable-panel-group"
//       className={cn(
//         'flex h-full w-full data-[panel-group-direction=vertical]:flex-col',
//         className,
//       )}
//       {...props}
//     />
//   )
// }

// function ResizablePanel({
//   ...props
// }: React.ComponentProps<typeof Panel>) {
//   return <Panel data-slot="resizable-panel" {...props} />
// }

// function ResizableHandle({
//   withHandle,
//   className,
//   ...props
// }: { withHandle?: boolean; className?: string } & Record<string, any>) {
//   return (
//     <RawResizeHandle
//       data-slot="resizable-handle"
//       className={cn(
//         'relative flex w-px items-center justify-center bg-border after:absolute after:inset-y-0 after:left-1/2 after:w-1 after:-translate-x-1/2 focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-offset-1 focus-visible:ring-ring data-[panel-group-direction=vertical]:h-px data-[panel-group-direction=vertical]:w-full data-[panel-group-direction=vertical]:after:left-0 data-[panel-group-direction=vertical]:after:h-1 data-[panel-group-direction=vertical]:after:w-full data-[panel-group-direction=vertical]:after:translate-x-0 data-[panel-group-direction=vertical]:after:-translate-y-1/2 [&[data-panel-group-direction=vertical]>div]:rotate-90',
//         className,
//       )}
//       {...props}
//     >
//       {withHandle && (
//         <div className="z-10 flex h-4 w-3 items-center justify-center rounded-sm border border-border bg-background">
//           <GripVerticalIcon className="h-2.5 w-2.5" />
//         </div>
//       )}
//     </RawResizeHandle>
//   )
// }

// export { ResizablePanelGroup, ResizablePanel, ResizableHandle }
// // ...existing code...