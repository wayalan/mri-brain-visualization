$(function() {
  BrainBrowser.VolumeViewer.start("volume-viewer", function(viewer) {
    // 设置背景颜色
    viewer.setBackgroundColor(255, 255, 255);

    // 加载 NIfTI 文件
    viewer.loadDefaultColorMapFromURL('https://brainbrowser.cbrain.mcgill.ca/surface-viewer/color-maps/spectral.txt', function() {
      viewer.loadVolume({
        type: "nifti1",
        nii_url: "data/mni152.nii.gz", // 修改为你自己的文件路径
        template: {
          element_id: "volume-viewer",
          viewer_insert_class: "volume-viewer-display"
        }
      });
    });

    // 监听切片更改事件
    viewer.addEventListener("sliceupdate", function() {
      console.log("Slice updated:", viewer.getCurrentSlice());
    });
  });
});
